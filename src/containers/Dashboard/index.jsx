import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { FaTrash, FaDiscord, FaGoogle } from 'react-icons/fa';
import * as S from './styles';

const defaultAvatar = '/images/default-avatar.png';
const defaultLinkIcon = '/images/default-link-icon.png';

function DashboardPage() {
    const [initialProfileData, setInitialProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [saveStatus, setSaveStatus] = useState('');
    const [linkStatusMsg, setLinkStatusMsg] = useState('');
    const [linking, setLinking] = useState(false);

    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [bio, setBio] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(defaultAvatar);
    const [backgroundFile, setBackgroundFile] = useState(null);
    const [customLinks, setCustomLinks] = useState([]);
    const [profileMode, setProfileMode] = useState('CUSTOM');

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const resolveBackendUrl = useCallback((relativePath) => {
        if (!relativePath) return null;
        if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) { return relativePath; }
        if (relativePath.startsWith('/uploads/')) { return `${apiBaseUrl}${relativePath}`; }
        return relativePath;
    }, [apiBaseUrl]);

    const fetchProfile = useCallback(async (showSavedMsg = false) => {
        setLoading(true); setError(null);
        if (!showSavedMsg) setSaveStatus('');
        if (!showSavedMsg) setLinkStatusMsg('');
        const token = localStorage.getItem('authToken');
        if (!token) { setError('Usuário não autenticado.'); setLoading(false); navigate('/login'); return; }
        try {
            const response = await axios.get(`${apiBaseUrl}/api/profile/me`, { headers: { Authorization: `Bearer ${token}` } });
            const data = response.data;
            setInitialProfileData(data);
            const currentUsername = data.user?.username;
            setUsername(currentUsername || '');
            setDisplayName(data.displayName || '');
            setBio(data.bio || '');
            setCustomLinks((data.customLinks || []).map((link, index) => ({ ...link, id: link.id || `temp-${index}-${Date.now()}` })));
            setAvatarPreview(resolveBackendUrl(data.user?.avatarUrl) || defaultAvatar);
            setProfileMode(data.profileMode || 'CUSTOM');
            if (!currentUsername) { setUsernameError('Por favor, defina um username único para o seu perfil.'); }
            else { setUsernameError(''); }
        } catch (err) {
            console.error("Erro ao buscar perfil:", err);
            if (err.response && (err.response.status === 401 || err.response.status === 403)) { setError('Sessão inválida ou expirada. Faça login novamente.'); localStorage.removeItem('authToken'); navigate('/login'); }
            else { setError('Falha ao carregar dados do perfil. Tente recarregar a página.'); }
        } finally { setLoading(false); }
    }, [apiBaseUrl, navigate, resolveBackendUrl]);

     useEffect(() => {
        const status = searchParams.get('link_status');
        let message = ''; let isError = false;
        if (status) {
             switch(status) {
                 case 'discord_success': message = 'Conta Discord vinculada com sucesso!'; break;
                 case 'discord_error_state': message = 'Erro de segurança ao vincular Discord (estado inválido).'; isError=true; break;
                 case 'discord_error_conflict': message = 'Essa conta Discord já está vinculada a outro usuário.'; isError=true; break;
                 case 'discord_error_api': message = 'Erro ao comunicar com o Discord durante a vinculação.'; isError=true; break;
                 case 'discord_error_missing_params': message = 'Parâmetros ausentes no retorno da vinculação.'; isError=true; break;
                 case 'discord_error_user_not_found': message = 'Usuário original não encontrado para vinculação.'; isError=true; break;
                 default: message = '';
             }
             setLinkStatusMsg(message);
             if(isError) setError(message); else setSaveStatus(message);
             searchParams.delete('link_status');
             setSearchParams(searchParams, { replace: true });
             fetchProfile(true);
        } else { fetchProfile(false); }
    }, [searchParams, setSearchParams, fetchProfile]);

    const handleUsernameChange = (event) => {
        const newUsername = event.target.value; setUsername(newUsername);
        const usernameRegex = /^[a-zA-Z0-9_-]+$/; const minLength = 3; const maxLength = 20;
        let errorMsg = '';
        if (!newUsername) { errorMsg = 'Username é obrigatório.'; }
        else if (!usernameRegex.test(newUsername)) { errorMsg = 'Use apenas letras, números, _ ou -.'; }
        else if (newUsername.length < minLength || newUsername.length > maxLength) { errorMsg = `Username deve ter entre ${minLength} e ${maxLength} caracteres.`; }
        setUsernameError(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'displayName') setDisplayName(value);
        else if (name === 'bio') setBio(value);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setAvatarFile(file); const reader = new FileReader();
            reader.onloadend = () => { setAvatarPreview(reader.result); }; reader.readAsDataURL(file);
        } else {
            setAvatarFile(null); setAvatarPreview(resolveBackendUrl(initialProfileData?.user?.avatarUrl) || defaultAvatar);
            if(event.target) event.target.value = null;
        }
    };

     const handleBackgroundChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) { setBackgroundFile(file); }
        else { setBackgroundFile(null); if(event.target) event.target.value = null; }
    };

    const handleCustomLinkChange = (id, field, value) => {
        setCustomLinks(prevLinks => prevLinks.map(link => link.id === id ? { ...link, [field]: value } : link ));
    };

    const addCustomLink = () => {
        setCustomLinks(prevLinks => [ ...prevLinks, { id: `new-${Date.now()}`, name: '', url: '', icon: '' } ]);
    };

    const removeCustomLink = (idToRemove) => {
        setCustomLinks(prevLinks => prevLinks.filter(link => link.id !== idToRemove));
    };

    const handleProfileUpdate = async (event) => {
        event.preventDefault();
        if (!username && !initialProfileData?.user?.username) { setUsernameError('Username é obrigatório.'); }
        if (usernameError) { setError('Corrija os erros no formulário antes de salvar.'); return; }

        setSaving(true); setError(null); setSaveStatus(''); setLinkStatusMsg('');
        const token = localStorage.getItem('authToken');
        if (!token) { setError('Autenticação necessária.'); setSaving(false); return; }

        const formData = new FormData();
        if (displayName !== (initialProfileData?.displayName || '')) formData.append('displayName', displayName);
        if (bio !== (initialProfileData?.bio || '')) formData.append('bio', bio);
        if (profileMode !== (initialProfileData?.profileMode || 'CUSTOM')) formData.append('profileMode', profileMode);
        if (username !== initialProfileData?.user?.username && username) { formData.append('username', username); }
        const linksToSend = customLinks.map(({ id, ...rest }) => rest);
        formData.append('customLinks', JSON.stringify(linksToSend));
        if (avatarFile) formData.append('avatar', avatarFile);
        if (backgroundFile) formData.append('background', backgroundFile);
        const apiUrl = `${apiBaseUrl}/api/profile/me`;

        try {
            const response = await axios.put(apiUrl, formData, { headers: { Authorization: `Bearer ${token}` } });
            const data = response.data;
            setInitialProfileData(data); setUsername(data.user?.username || ''); setDisplayName(data.displayName || '');
            setBio(data.bio || ''); setCustomLinks((data.customLinks || []).map((link, index) => ({ ...link, id: link.id || `temp-${index}-${Date.now()}` })));
            setAvatarPreview(resolveBackendUrl(data.user?.avatarUrl) || defaultAvatar); setProfileMode(data.profileMode || 'CUSTOM');
            setAvatarFile(null); setBackgroundFile(null);
            const avatarInput = document.getElementById('avatar-upload'); if(avatarInput) avatarInput.value = null;
            const bgInput = document.getElementById('background-upload'); if(bgInput) bgInput.value = null;
            setSaveStatus('Perfil salvo com sucesso!'); setError(null); setUsernameError('');
        } catch (err) {
            console.error("Erro ao salvar perfil:", err);
            if (err.response && (err.response.status === 401 || err.response.status === 403)) { setError('Sua sessão expirou. Faça login novamente.'); localStorage.removeItem('authToken'); navigate('/login'); }
            else { setError(err.response?.data?.message || 'Falha ao salvar o perfil.'); }
            setSaveStatus('');
        } finally { setSaving(false); }
    };

    const handleLogout = () => { localStorage.removeItem('authToken'); navigate('/'); };

    const handleLinkDiscordClick = async () => {
        setLinking(true); setError(null); setLinkStatusMsg('');
        const token = localStorage.getItem('authToken');
        if (!token) { setError('Autenticação necessária para vincular contas.'); setLinking(false); return; }
        try {
            const response = await axios.get(`${apiBaseUrl}/api/account/link/discord`, { headers: { Authorization: `Bearer ${token}` } });
            if (response.data && response.data.discordAuthUrl) { window.location.href = response.data.discordAuthUrl; }
            else { throw new Error("URL de autenticação Discord não recebida."); }
        } catch (err) {
            console.error("Erro ao iniciar vinculação Discord:", err);
            setError(err.response?.data?.message || "Falha ao iniciar vinculação com Discord.");
            setLinking(false);
        }
    };

    const isSyncedMode = profileMode === 'SYNC_DISCORD';

    const renderForm = () => (
        <S.Form onSubmit={handleProfileUpdate}>
            <h2>Configurações da Conta</h2>
            {initialProfileData?.user?.username && (
                <S.ProfileLinkDisplay><span>Link do seu perfil público: </span><Link to={`/@${initialProfileData.user.username}`} target="_blank">{`${window.location.origin}/@${initialProfileData.user.username}`}</Link></S.ProfileLinkDisplay>
            )}
             <S.FormGroup>
                <S.Label>Modo do Perfil</S.Label>
                <select value={profileMode} onChange={(e) => setProfileMode(e.target.value)} style={{ padding: '10px', borderRadius: '4px'}}>
                    <option value="CUSTOM">Customizar Perfil</option><option value="SYNC_DISCORD">Sincronizar com Discord (Status/Atividade)</option>
                </select>
                {isSyncedMode && (<p style={{fontSize: '0.85rem', color: '#aaa'}}>Nome e Avatar serão sincronizados. Bio, Background e Links permanecem customizáveis.</p>)}
            </S.FormGroup>
            <S.FormGroup>
                <S.Label htmlFor="username">Username (para URL /@)</S.Label>
                <S.Input type="text" id="username" value={username} onChange={handleUsernameChange} pattern="[a-zA-Z0-9_-]+" title="Use apenas letras (a-z, A-Z), números (0-9), _ ou -" minLength="3" maxLength="20" required aria-describedby="username-error" disabled={saving}/>
                {usernameError && <S.InputError id="username-error">{usernameError}</S.InputError>}
            </S.FormGroup>

            <h2>Aparência do Perfil</h2>
            <S.AvatarSection>
                <S.Label>Avatar</S.Label>
                <S.AvatarPreview src={avatarPreview} alt="Preview do Avatar"/>
                <S.Input type="file" id="avatar-upload" accept="image/*" onChange={handleAvatarChange} disabled={isSyncedMode || saving}/>
                 {isSyncedMode && <p style={{fontSize: '0.85rem', color: '#aaa'}}>Avatar sincronizado com Discord.</p>}
            </S.AvatarSection>
            <S.FormGroup>
                <S.Label htmlFor="displayName">Nome de Exibição</S.Label>
                <S.Input type="text" id="displayName" name="displayName" value={displayName} onChange={handleInputChange} maxLength="50" disabled={isSyncedMode || saving}/>
                 {isSyncedMode && <p style={{fontSize: '0.85rem', color: '#aaa'}}>Nome sincronizado com Discord.</p>}
            </S.FormGroup>
            <S.FormGroup>
                <S.Label htmlFor="bio">Bio</S.Label>
                <S.Textarea id="bio" name="bio" value={bio} onChange={handleInputChange} maxLength="160" disabled={saving}/>
            </S.FormGroup>
             <h2>Background do Perfil</h2>
             <S.FormGroup>
                 <S.Label htmlFor="background-upload">Imagem / GIF / Vídeo</S.Label>
                 <S.Input type="file" id="background-upload" accept="image/*,video/*" onChange={handleBackgroundChange} disabled={saving}/>
             </S.FormGroup>
            <h2>Links Customizados</h2>
            <S.LinksEditorSection>
                {customLinks.map((link, index) => (
                    <S.LinkItem key={link.id}>
                         <S.LinkIconPreview src={resolveBackendUrl(link.icon) || defaultLinkIcon} alt=""/>
                        <S.LinkInput type="text" placeholder="Nome (ex: Website)" value={link.name} onChange={(e) => handleCustomLinkChange(link.id, 'name', e.target.value)} disabled={saving}/>
                        <S.LinkInput type="url" placeholder="URL (ex: https://...)" value={link.url} onChange={(e) => handleCustomLinkChange(link.id, 'url', e.target.value)} disabled={saving}/>
                         <S.LinkInput type="url" placeholder="URL do Ícone (opcional)" value={link.icon || ''} onChange={(e) => handleCustomLinkChange(link.id, 'icon', e.target.value)} disabled={saving}/>
                        <S.RemoveLinkButton type="button" onClick={() => removeCustomLink(link.id)} title="Remover Link" disabled={saving}><FaTrash /></S.RemoveLinkButton>
                    </S.LinkItem>
                ))}
                 <S.AddLinkButton type="button" onClick={addCustomLink} disabled={saving}> Adicionar Link </S.AddLinkButton>
            </S.LinksEditorSection>

            <S.SubmitButton type="submit" disabled={saving || !!usernameError || loading}>
                {saving ? 'Salvando...' : 'Salvar Alterações'}
            </S.SubmitButton>
        </S.Form>
    );

    return (
        <S.DashboardContainer>
            <h1>Meu Painel</h1>
            {linkStatusMsg && (error ? <S.ErrorMessage>{linkStatusMsg}</S.ErrorMessage> : <S.SuccessMessage>{linkStatusMsg}</S.SuccessMessage>)}
            {error && !linkStatusMsg && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {saveStatus && !linkStatusMsg && <S.SuccessMessage>{saveStatus}</S.SuccessMessage>}
            {loading && !initialProfileData && <S.LoadingMessage>Carregando seus dados...</S.LoadingMessage>}
            {!loading && initialProfileData && (
                <>
                    {renderForm()}
                     <h2>Contas Vinculadas</h2>
                     <S.FormGroup style={{ alignItems: 'center', gap: '10px' }}>
                        {initialProfileData?.user?.discordId ? ( <p style={{ color: '#7289DA' }}>✓ Discord Conectado ({initialProfileData.user.discordUsername || 'Usuário'})</p> ) : (
                             <S.DiscordLoginButton type="button" onClick={handleLinkDiscordClick} disabled={linking || saving}> {linking ? 'Aguarde...' : <><FaDiscord /> Conectar Conta Discord</>} </S.DiscordLoginButton>
                        )}
                         {initialProfileData?.user?.googleId ? ( <p style={{ color: '#DB4437' }}>✓ Google Conectado ({initialProfileData.email || 'Usuário'})</p> ) : (
                             <S.GoogleLoginButton type="button" onClick={() => alert('Vinculação Google a implementar')} disabled={linking || saving}> <FaGoogle /> Conectar Conta Google </S.GoogleLoginButton>
                         )}
                     </S.FormGroup>
                     <S.LogoutButton onClick={handleLogout}> Deslogar </S.LogoutButton>
                </>
            )}
        </S.DashboardContainer>
    );
}

export default DashboardPage;
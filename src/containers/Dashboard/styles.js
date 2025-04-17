import styled from 'styled-components';

export const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  color: #ccc;
  background-color: rgba(25, 26, 30, 0.7);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  body.light-mode & {
      color: #333;
      background-color: rgba(255, 255, 255, 0.8);
      border-color: rgba(0, 0, 0, 0.1);
  }

  h1, h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #0ff;
    body.light-mode & { color: #C71585; }
  }
  h2 {
    margin-top: 35px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
     body.light-mode & { border-bottom-color: rgba(0, 0, 0, 0.1); }
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-style: italic;
  color: #aaa;
  body.light-mode & { color: #777; }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: #f8d7da;
  background-color: rgba(220, 53, 69, 0.6);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(220, 53, 69, 0.8);
  margin-top: 15px;
  margin-bottom: 15px;

  body.light-mode & {
      color: #721c24;
      background-color: rgba(248, 215, 218, 0.8);
      border-color: #f5c6cb;
  }
`;

export const SuccessMessage = styled.p`
    text-align: center;
    color: #d4edda;
    background-color: rgba(25, 135, 84, 0.7);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(25, 135, 84, 0.9);
    margin-top: 15px;
    margin-bottom: 15px;

    body.light-mode & {
        color: #0f5132;
        background-color: rgba(209, 231, 221, 0.9);
        border-color: #badbcc;
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #bbb;
  font-size: 0.95rem;
  text-align: left;
  body.light-mode & { color: #444; }
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: rgba(10, 11, 14, 0.5);
  color: #eee;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #0ff;
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
  }

  body.light-mode & {
      background-color: rgba(255, 255, 255, 0.9);
      border-color: #ccc;
      color: #333;
       &:focus {
        border-color: #C71585;
        box-shadow: 0 0 5px rgba(199, 21, 133, 0.3);
       }
  }

  &[type="file"] {
    background-color: transparent;
    border: 1px dashed #555;
    color: #bbb;
    cursor: pointer;
     body.light-mode & { border-color: #ccc; color: #555;}
  }

   &[type="file"]::file-selector-button {
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #555;
    color: #eee;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    body.light-mode & { background-color: #ddd; color: #333;}
  }
`;

export const Textarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: rgba(10, 11, 14, 0.5);
  color: #eee;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;

   &:focus {
    outline: none;
    border-color: #0ff;
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
  }

   body.light-mode & {
      background-color: rgba(255, 255, 255, 0.9);
      border-color: #ccc;
      color: #333;
       &:focus {
        border-color: #C71585;
        box-shadow: 0 0 5px rgba(199, 21, 133, 0.3);
       }
  }
`;

export const SubmitButton = styled.button`
    padding: 12px 25px;
    border-radius: 5px;
    background-color: #0ff;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease, opacity 0.2s ease;
    margin-top: 15px;
    align-self: flex-start;

    &:hover {
        background-color: #0dd;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

     body.light-mode & {
        background-color: #C71585;
        color: #fff;
         &:hover {
            background-color: #a1106a;
         }
     }
`;

export const InputError = styled.span`
  color: #ff8a8a;
  font-size: 0.85rem;
  margin-top: -5px;
  display: block;
  text-align: left;
   body.light-mode & { color: #d93025; }
`;

export const ProfileLinkDisplay = styled.div`
    background-color: rgba(0,0,0,0.2);
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 25px;
    font-size: 0.95rem;
    word-break: break-all;
    border: 1px solid rgba(255,255,255,0.05);
    body.light-mode & {
        background-color: rgba(0,0,0,0.05);
        border-color: rgba(0,0,0,0.08);
    }

    a {
        color: #0ff;
        font-weight: bold;
        text-decoration: none;
        body.light-mode & { color: #C71585; }
    }
     span {
         color: #aaa;
         body.light-mode & { color: #666; }
     }
`;

export const AvatarSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;

    body.light-mode & {
        border-color: rgba(0, 0, 0, 0.1);
    }
`;

export const AvatarPreview = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #555;
    background-color: #444;
    object-fit: cover;
    margin-bottom: 10px;

    body.light-mode & {
        border-color: #ccc;
        background-color: #eee;
    }
`;

export const LinksEditorSection = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
     body.light-mode & { border-top-color: rgba(0, 0, 0, 0.1); }
`;

export const LinkItem = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 1fr auto; // Icon Preview, Name, URL, Remove Button
    gap: 10px;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    background-color: rgba(0,0,0,0.15);
    border: 1px solid rgba(255, 255, 255, 0.05);

    body.light-mode & {
      background-color: rgba(0,0,0,0.03);
      border-color: rgba(0,0,0,0.08);
    }
`;

export const LinkIconPreview = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 4px;
    object-fit: contain;
    background-color: rgba(255,255,255,0.1);
    body.light-mode & { background-color: rgba(0,0,0,0.05); }
`;

export const LinkInput = styled(Input)`
    font-size: 0.9rem;
    padding: 8px 10px;
`;

export const AddLinkButton = styled(SubmitButton)`
    background-color: #28a745; // Verde
    color: white;
    align-self: center;
    margin-top: 10px;
    padding: 8px 15px;
    font-size: 0.9rem;

    &:hover {
        background-color: #218838;
    }
     body.light-mode & {
        background-color: #28a745;
        &:hover { background-color: #218838; }
     }
`;

export const RemoveLinkButton = styled.button`
    background: none;
    border: none;
    color: #ff8a8a;
    font-size: 1.3rem;
    cursor: pointer;
    padding: 5px;
    line-height: 1;
    transition: color 0.2s ease;

    &:hover {
        color: #dc3545;
    }
    body.light-mode & {
        color: #dc3545;
         &:hover { color: #c82333; }
    }
`;

export const LogoutButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #dc3545;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-top: 20px;
    align-self: center;

    &:hover {
        background-color: #c82333;
    }

    body.light-mode & {
        background-color: #dc3545;
         &:hover {
            background-color: #c82333;
         }
    }
`;

export const DiscordLoginButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  border-radius: 5px;
  background-color: #5865F2;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  svg {
    margin-right: 10px;
    font-size: 1.3em;
  }

  &:hover {
    background-color: #4752C4;
  }
`;

export const GoogleLoginButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  border-radius: 5px;
  background-color: #4285F4;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  svg {
    margin-right: 10px;
    font-size: 1.2em;
  }

  &:hover {
    background-color: #357ae8;
  }
`;
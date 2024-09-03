import React from 'react';

const Profile = () => {
  const email = "usuario@example.com";  // Simulación de datos del usuario

  return (
    <div className="profile">
      <h1>Perfil del Usuario</h1>
      <p>Email: {email}</p>
      <button>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
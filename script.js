// Función para obtener parámetros de la URL hash
function getParamsFromUrlHash() {
    const params = {};
    const hashString = window.location.hash.substring(1);
    const hashParams = new URLSearchParams(hashString);
    for (const [key, value] of hashParams) {
        params[key] = value;
    }
    return params;
}

// Función para obtener información del usuario utilizando el token de acceso
async function getUserInfo(accessToken) {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    
    return await response.json();
}

// Función para imprimir información del usuario en la consola
async function printUserInfo() {
    const params = getParamsFromUrlHash();

    // Obtener información del usuario
    const userInfo = await getUserInfo(params['access_token']);
    console.log("Correo electrónico:", userInfo.email);
    console.log("Nombre del usuario:", userInfo); 
}

// Ejecutar la función para imprimir información del usuario al cargar la página
printUserInfo();

// Función para iniciar sesión con Google
function loginWithGoogle() {
    // Redireccionar al usuario a la página de inicio de sesión de Google
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email%20profile&response_type=token&redirect_uri=http://127.0.0.1:5500/index2.html&client_id=558702705435-fdl2he3oj8bk988h2s8miqrphr954pe1.apps.googleusercontent.com';
}


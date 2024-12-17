import { Client, AuthOptions } from 'fnbr';
import { readFileSync, writeFileSync } from 'fs';
import { existsOrCreate, getTemp } from './fs';

const load = (): AuthOptions => {
    const options: AuthOptions = {
        checkEULA: true,
        clientId: 'TU_CLIENT_ID', // Sustituye con tu client_id
        clientSecret: 'TU_CLIENT_SECRET', // Sustituye con tu client_secret
    };

    try {
        // Asegurarse de que la carpeta `.temp` exista
        existsOrCreate(getTemp());

        // Intentar cargar el token refrescado
        const refreshTokenPath = getTemp('refreshToken');
        options.launcherRefreshToken = readFileSync(refreshTokenPath, 'utf-8');
    } catch (e) {
        // Si no hay un token refrescado pide al usuario un código de autorización
        console.log('[❓] Ve al siguiente enlace, inicia sesión y copia el código de autorización:');
        console.log('https://www.epicgames.com/id/logout?redirectUrl=https%3A//www.epicgames.com/id/login%3FredirectUrl%3Dhttps%253A%252F%252Fwww.epicgames.com%252Fid%252Fapi%252Fredirect%253FclientId%253D3f69e56c7649492c8cc29f1af08a8a12%2526responseType%253Dcode');
        options.authorizationCode = async () => await Client.consoleQuestion('[❓] Introduce aquí el código de autorización:\n');
    }

    return options;
};

const saveRefreshToken = (token: string): void => {
    const refreshTokenPath = getTemp('refreshToken');
    writeFileSync(refreshTokenPath, token, 'utf-8');
};

export {
    load,
    saveRefreshToken,
};

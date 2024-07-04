import Event from '../core/event';
import BotClient from '../core/client';
import { Friend } from 'fnbr';

class FriendAddedEvent extends Event {
    constructor() {
        super({
            name: 'friend:added',
        });
    }
    
    async run(client: BotClient, friend: Friend) {
        try {
            // Aca envia el mensaje de Bienvenida.
            await friend.sendMessage(`¡Hola, unete si es tu primera ves! Debes de mandarme mensajes al privado si quieres que baile o me cambie los cosmeticos. ${friend.displayName} :)`);
            
            // El bot envia la invitacion
            await friend.invite();
        } catch (error) {
            console.error('Error al enviar mensaje o invitación:', error);
        }
    }
}

export default new FriendAddedEvent();

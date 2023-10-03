import React from 'react';

const CommentComponent = ({ comment }) => {
    const timeSince = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return `${interval} mês(es) atrás`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return `${interval} dia(s) atrás`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return `${interval} hora(s) atrás`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return `${interval} minutos atrás`;
        }
        return 'há poucos segundos';
    };

    return (
        <div className="flex mt-6">
            <img src={comment.user.image} alt={comment.user.name} className="w-24 h-24 rounded-full" />
            <div className="ml-4 flex flex-col">
                <span>{comment.user.name}</span>
                <span className="text-xs text-gray-500">{timeSince(new Date(comment.created_at))}</span>
                <p className="mt-2">{comment.content}</p>
                <button className="text-blue-500 mt-2">Responder {comment.user.name}</button>
                <div className="mt-4">
                    <div className="flex">
                        <input type="text" placeholder="Nome" className="w-1/2 mr-2" />
                        <input type="text" placeholder="Sobrenome" className="w-1/2" />
                    </div>
                    <input type="email" placeholder="Email" className="w-full mt-2" />
                    <textarea placeholder="Seu comentário" className="w-full mt-2"></textarea>
                    <button className="mt-2 bg-blue-500 text-white p-2 rounded">Enviar seu comentário</button>
                </div>
            </div>
        </div>
    );
};

export default CommentComponent;

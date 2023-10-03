import React, { useState } from 'react';

const CommentComponent = ({ comment }) => {
  const [replying, setReplying] = useState(false);
  const [newComment, setNewComment] = useState('');

  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
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

  const handleReplyClick = () => {
    setReplying(true);
  };

  const handleCreateComment = async () => {
    // Lógica para enviar o novo comentário para o servidor deve ser implementada aqui.
    // Após o envio bem-sucedido, você pode atualizar os comentários.

    // Por enquanto, vamos apenas atualizar o estado local como exemplo:
    setReplying(false);
    setNewComment(''); // Limpa o campo de resposta
  };

  return (
    <div className="flex mt-6">
      <img src={comment.user.image} alt={comment.user.name} className="w-24 h-24 rounded-full" />
      <div className="ml-4 flex flex-col w-full">
        <div className="flex justify-between">
          <span className="font-semibold text-lg">{comment.user.name}</span>
          <span className="text-xs text-gray-500">{timeSince(comment.created_at)}</span>
        </div>
        <p className="mt-2">{comment.content}</p>
        <button
          onClick={handleReplyClick}
          className="text-blue-500 mt-2 hover:underline cursor-pointer"
        >
          Responder {comment.user.name}
        </button>
        {replying && (
          <div className="mt-4 border-l-4 pl-4">
            <textarea
              placeholder={`Responder a ${comment.user.name}`}
              className="w-full h-32 p-2 border rounded focus:ring focus:border-blue-300"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              onClick={handleCreateComment}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Enviar seu comentário
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentComponent;

import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    // untuk melakukan penambahan padding kiri dan kanan yang teksnya dimulai dari kiri
    <div className="px-5 text-start">
      <input className="mt-3 mx-1" type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />
    {/* membuat huruf pada teks menjadi warna putih */}
      <span className="text-white border" style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>
    {/* supaya button hapus atau x ada di akhir */}
      <button className="mt-1 float-end" onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}>X</button>
    </div>
  );
}

export default TodoItem;
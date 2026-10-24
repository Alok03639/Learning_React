import React from 'react';

function Card(props){
    console.log(props);
    return(
        <>
            <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.unsplash.com/photo-1789758385692-38432c7bc6f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">{props.obj.username}</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
        </>
    )
}

export default Card



 
export const taskloader = async() =>{
    const res = await fetch('localhost/3000/tasks')
    return res.json();
  }
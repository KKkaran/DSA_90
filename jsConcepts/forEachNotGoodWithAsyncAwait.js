const getPost = async (id) => {
  return await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  ).json();
};

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getData = async () => {
  
    ids.forEach(async id => {
        const gg = await getPost(id);
        console.log(id)
   })
};
//getData()


const usingReduce = async (ids) => {
    await ids.reduce(async (acc, id) => {
        console.log(acc)
        await acc
        const gg = await getPost(id)
        console.log(gg)
    },Promise.resolve() )

    console.log('ending!!!')
}

usingReduce(ids);

const getKaran = async () => {
    const dd = await getPost(4)
    console.log(dd)
}

//getKaran()


// [22, 33, 44].reduce((acc, ite) => {
//     console.log(ite)
// },acc)
const Tmp = () => {
    console.log("HELLO SIR THIS IS STARTING LINE!!!");

    async function test(){
        console.log("Test Function run");

        const resp = await fetch('https://api.github.com/users');
        console.log("resp fetching data from github/users")

        console.log("jsonify gonna start"); 
        const users = await resp.json();
        console.log("jsonify done");

        return users;
    }

    console.log("Before calling test func");
    const fun = test();
    console.log(fun);
    fun.then(info => {console.log(info)})  
    console.log("After calling test func"); 
    return null;

}

export default Tmp;

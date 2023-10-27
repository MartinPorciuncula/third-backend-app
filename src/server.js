import app from "./app.js";
import { envs } from "./config/enviroments/enviroments.js";
import { authenticate,sincronize} from "./config/database/database.js"
async function main(){
    try {
        await authenticate()
        await sincronize()
    } catch (error) {
     console.log(error);   
    }
}

main()


app.listen(envs.PORT, () => {
    console.log(`Server running on ${envs.PORT}`);
  });
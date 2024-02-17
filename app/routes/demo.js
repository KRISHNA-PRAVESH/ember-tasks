import Route from '@ember/routing/route';
import fetch from 'fetch';
export default class DemoRoute extends Route {
    async model(){
        let data = await fetch("http://localhost:5173/all");
        let parsed = await data.json();

        let msg = '';
         parsed.forEach((c)=>{
            msg+=c;
        })
        return msg;
    }
}
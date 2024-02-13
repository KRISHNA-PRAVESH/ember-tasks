import Route from '@ember/routing/route';

export default class ListRoute extends Route {
    model(){
        return 'data for table component'
    }
}

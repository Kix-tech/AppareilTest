import { Subject } from 'rxjs';
import { User } from './../models/user.model';
export class UserService{
    private users:User[]=[
        {
            nom:'RAKOTOARITIANA',
            prenom:'Nantenaina',
            email:'kixnantenainarak@gmail.com',
            loisirs:['Coder']
        }

    ];
    userSubject=new Subject<User[]>();
    emitUsers(){
        this.userSubject.next(this.users.slice())
    }
    addUser(user:User){
        this.users.push(user);
        this.emitUsers;
    }
}
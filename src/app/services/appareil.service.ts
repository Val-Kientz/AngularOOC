import { Subject } from 'rxjs';

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'Eteint'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'Allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'Eteint'
        }
    ];

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }

    //#region ON methods
    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'Allumé';
            this.emitAppareilSubject();
        }
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'Allumé';
        this.emitAppareilSubject();
    }

    //#endregion

    //#region OFF methods
    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'Eteint';
            this.emitAppareilSubject();
        }
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'Eteint';
        this.emitAppareilSubject();
    }

    //#endregion


}
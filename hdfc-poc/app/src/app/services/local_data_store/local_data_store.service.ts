/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class local_data_storeService {
    private activeBrokerKey = 'brokerData';

    addActiveAgent(data: any): void {
        localStorage.setItem(this.activeBrokerKey, JSON.stringify(data));
    }

    getActiveAgent(): any {
        const data = localStorage.getItem(this.activeBrokerKey);
        return data ? JSON.parse(data) : null;
    }

    removeActiveAgent(): any {
        localStorage.removeItem(this.activeBrokerKey);
    }
}

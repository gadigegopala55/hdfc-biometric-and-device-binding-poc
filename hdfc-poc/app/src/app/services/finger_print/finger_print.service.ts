/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
declare var Fingerprint: any;

@Injectable({
    providedIn: 'root'
})
export class finger_printService {

    constructor() { }

    authenticateFingerprint(): Promise<any> {
        return new Promise((resolve, reject) => {
            Fingerprint.isAvailable(isAvailableSuccess, isAvailableError, {});

            function isAvailableSuccess(result) {
                Fingerprint.show({
                    description: "Some biometric description"
                }, successCallback, errorCallback);

                function successCallback() {
                    alert("Authentication successful:");
                    resolve(true);
                }

                function errorCallback(error) {
                    alert("Authentication invalid " + error.message);
                    reject('Fingerprint authentication failed.');
                }
            }

            function isAvailableError(error) {
                // 'error' will be an object with an error code and message
                alert(error.message);
                reject('Fingerprint authentication failed.');
            }
        });
    }

    fingerPrintIsAvailable(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                Fingerprint.isAvailable(isAvailable, isNotAvailableError, {});
                
                function isAvailable() {
                    resolve(true);
                }

                function isNotAvailableError() {
                    reject(false);
                }
            } catch (error) {
                reject(false);
            }
        });
    }
}

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
declare var device: any;

@Injectable()
export class commonService {
    private actdevice;

    constructor() { }

    getDeviceId(): string {
        if (typeof device !== 'undefined') {
            return device.uuid;
        } else {
            // return 'Device plugin not available';
            return undefined;
        }
    }

    findDevice(): void {
        // let actdevice;

        // Detect device using platform
        var platform = navigator.platform;

        if (platform.toLowerCase().includes("win")) {
            // console.log("You are using a Windows-based device.");
            // uncomment this line after complete task!
            this.actdevice = 'win';
            // this.actdevice = this.findOtherDevices();
        } else if (platform.toLowerCase().includes("mac")) {
            // console.log("You are using a macOS-based device.");
            this.actdevice = 'mac';
        } else if (platform.toLowerCase().includes("linux")) {
            // console.log("You are using a Linux-based device.");
            this.actdevice = 'linux';
        } else {
            // console.log("Device platform not recognized.");
            this.actdevice = 'none';
        }

        // // console.log("actdevice:", this.actdevice);
        return this.actdevice;

    }

    findOtherDevices() {
        let device: any;

        // Detect device using userAgent
        var userAgent = navigator.userAgent;
        // console.log("userAgent:", userAgent);
        if (userAgent.match(/Android/i)) {
            // console.log("You are using an Android device.");
            device = 'android';
        } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
            // console.log("You are using an iOS device.");
            device = 'ios';
        } else if (userAgent.match(/Windows/i)) {
            // console.log("You are using a Windows device.");
            device = 'window';
        } else if (userAgent.match(/Mac OS/i)) {
            // console.log("You are using a macOS device.");
            device = 'macOS';
        } else {
            // console.log("Device not recognized.");
            device = 'Device not recognized.';
        }

        return device;
    }

}

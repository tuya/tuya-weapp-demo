
## Note: This repository is inherited from the old Tuya Github repository: xxxxxx, which will be deprecated soon. Please use this repository for Tuya SDK development instead. For changing the existing remote repository URL, please check this tutorial: https://github.com/TuyaInc/tuya-weapp-demo
## An overview of the

This is a simple version of fast access[Doodle applet SDK](https://developer.tuya.com/cn/docs/iot/app-development/mini-programs/overview/applet-ecology?id=K9ptacgp94o5d)，[配网插件](https://developer.tuya.com/cn/docs/iot/app-development/mini-programs/tuya-applet-with-web-plugin/distribution-network-plugin?id=K9lq218xn0wn8) and MQTT Of the connection Demo，It's stabilizing at the moment. New features will be updated in the future.

## experience

If you need to embed the function of small program distribution network in your own small program, you can access the small program SDK to get your ticket information, then call the small program plug-in to complete the distribution network, and then call the interface to get device information again after the success of the distribution network.

If you need to develop device control, scene linkage, automation and other functions in your own small program, you can call the corresponding interface through the small program SDK.

If you need a doodle public applet to support your device, please contact us. Public version of the small program you can scan the code below the TWO-DIMENSIONAL code experience：

<p align="center">
<img width=200 src="https://images.tuyacn.com/rms-static/9cbc9210-cb1f-11ea-9723-5fcc4b1eeb4e-1595314722225.jpg?tyName=gh_42ad2888c42d_258.jpg" >
</p>

If no device is shown in the device list, you can click "Add Device", select "Scan code Distribution network" and scan the following TWO-DIMENSIONAL code to experience the device。
<p align="center"  >
<img width=200 src="https://airtake-public-data-1254153901.cos.ap-shanghai.myqcloud.com/goat/20200703/9123115b69c049899d14a84b239c13ed.png" >
<p align="center">Aromatherapy machine</p>
</p>

<p align="center"  >
<img width=200 src="https://images.tuyacn.com/rms-static/8f9a30a0-c805-11ea-a0c6-dbbe4bc4c496-1594973679786.png?tyName=kj.png" >
<p align="center">Air purifier</p>
</p>

<p align="center"  >
<img width=200 src="https://images.tuyacn.com/rms-static/8f9e9d70-c805-11ea-a9da-3362f25bc183-1594973679815.png?tyName=kt.png" >
<p align="center">air conditioner</p>
</p>

<p align="center"  >
<img width=200 src="https://images.tuyacn.com/rms-static/8f9a0990-c805-11ea-a0c6-dbbe4bc4c496-1594973679785.png?tyName=cl.png" >
<p align="center">The curtain motor</p>
</p>

<p align="center"  >
<img width=200 src="https://images.tuyacn.com/rms-static/c1cc0660-c81a-11ea-a0c6-dbbe4bc4c496-1594982783430.png?tyName=dj.png" >
<p align="center">Intelligent lamp</p>
</p>

## Demo 目录

```
├── cloudfunctions             // Cloud Function directory
│   ├── ty-service            // SDK
├── miniprogram                 // Applet home directory
│   ├── image                   // The gallery
│   ├── libs                   // Third-party libraries
│   ├── pages                  // The directory for the specific page
│   ├── app.js                 // Applet entry
│   ├── app.json               // The configuration file
├── project.config.json        // Project profile
└── README.md            // Description file
```

## Demo Description

- Equipment distribution network：

  Directly click the button for network distribution: AP network distribution, code scanning network distribution, Bluetooth network distribution and ZigBee network distribution are currently supported

- Experience device functions：

  After adding a device, you can click the device open switch to adjust MQTT message push of the device. It is suggested to use getdevicespeciannotation function in API.JS file to get the instruction set to avoid the possibility of inconsistent names of dp point fields. The content of the push message will be displayed on the page after the instruction is issued normally

- The full version Demo
  Currently support device control, message push, add device (distribution network), home module

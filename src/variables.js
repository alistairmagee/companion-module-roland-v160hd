module.exports = {
	initVariables: function () {
		let self = this
		let variables = []

		variables.push({ variableId: 'model', name: 'Model' })
		variables.push({ variableId: 'version', name: 'Version' })

		for (let i = 0; i < self.TALLYDATA.length; i++) {
			variables.push({ variableId: 'tally_' + self.TALLYDATA[i].shortlabel, name: self.TALLYDATA[i].label + ' Tally' })
		}

		variables.push({ variableId: 'pnpkey1_pgm', name: 'PnP/Key 1 on PGM' })
		variables.push({ variableId: 'pnpkey1_pvw', name: 'PnP/Key 1 on PVW' })
		variables.push({ variableId: 'pnpkey2_pgm', name: 'PnP/Key 2 on PGM' })
		variables.push({ variableId: 'pnpkey2_pvw', name: 'PnP/Key 2 on PVW' })
		variables.push({ variableId: 'pnpkey3_pgm', name: 'PnP/Key 3 on PGM' })
		variables.push({ variableId: 'pnpkey3_pvw', name: 'PnP/Key 3 on PVW' })
		variables.push({ variableId: 'pnpkey4_pgm', name: 'PnP/Key 4 on PGM' })
		variables.push({ variableId: 'pnpkey4_pvw', name: 'PnP/Key 4 on PVW' })

		//pnp/key sources
		variables.push({ variableId: 'pnpkey1_source', name: 'PnP/Key 1 Source' })
		variables.push({ variableId: 'pnpkey2_source', name: 'PnP/Key 2 Source' })
		variables.push({ variableId: 'pnpkey3_source', name: 'PnP/Key 3 Source' })
		variables.push({ variableId: 'pnpkey4_source', name: 'PnP/Key 4 Source' })

        //pnp/key enabled
        variables.push({ variableId: 'pnpkey1_pgm_enabled', name: 'PnP/Key 1 enabled on PGM'})
        variables.push({ variableId: 'pnpkey2_pgm_enabled', name: 'PnP/Key 2 enabled on PGM'})
        variables.push({ variableId: 'pnpkey3_pgm_enabled', name: 'PnP/Key 3 enabled on PGM'})
        variables.push({ variableId: 'pnpkey4_pgm_enabled', name: 'PnP/Key 4 enabled on PGM'})
        variables.push({ variableId: 'dsk1_pgm_enabled', name: 'DSK 1 enabled on PGM'})
        variables.push({ variableId: 'dsk2_pgm_enabled', name: 'DSK 2 enabled on PGM'})
        variables.push({ variableId: 'pnpkey1_sub_pgm_enabled', name: 'PnP/Key 1 enabled on SUB PGM'})
        variables.push({ variableId: 'pnpkey2_sub_pgm_enabled', name: 'PnP/Key 2 enabled on SUB PGM'})
        variables.push({ variableId: 'pnpkey3_sub_pgm_enabled', name: 'PnP/Key 3 enabled on SUB PGM'})
        variables.push({ variableId: 'pnpkey4_sub_pgm_enabled', name: 'PnP/Key 4 enabled on SUB PGM'})
        variables.push({ variableId: 'dsk1_sub_pgm_enabled', name: 'DSK 1 enabled on SUB PGM'})
        variables.push({ variableId: 'dsk2_sub_pgm_enabled', name: 'DSK 2 enabled on SUB PGM'})
        variables.push({ variableId: 'pnpkey1_aux1_enabled', name: 'PnP/Key 1 enabled on Aux 1'})
        variables.push({ variableId: 'pnpkey2_aux1_enabled', name: 'PnP/Key 2 enabled on Aux 1'})
        variables.push({ variableId: 'pnpkey3_aux1_enabled', name: 'PnP/Key 3 enabled on Aux 1'})
        variables.push({ variableId: 'pnpkey4_aux1_enabled', name: 'PnP/Key 4 enabled on Aux 1'})
        variables.push({ variableId: 'dsk1_aux1_enabled', name: 'DSK 1 enabled on Aux 1'})
        variables.push({ variableId: 'dsk2_aux1_enabled', name: 'DSK 2 enabled on Aux 1'})
        variables.push({ variableId: 'pnpkey1_aux2_enabled', name: 'PnP/Key 1 enabled on Aux 2'})
        variables.push({ variableId: 'pnpkey2_aux2_enabled', name: 'PnP/Key 2 enabled on Aux 2'})
        variables.push({ variableId: 'pnpkey3_aux2_enabled', name: 'PnP/Key 3 enabled on Aux 2'})
        variables.push({ variableId: 'pnpkey4_aux2_enabled', name: 'PnP/Key 4 enabled on Aux 2'})
        variables.push({ variableId: 'dsk1_aux2_enabled', name: 'DSK 1 enabled on Aux 2'})
        variables.push({ variableId: 'dsk2_aux2_enabled', name: 'DSK 2 enabled on Aux 2'})
        variables.push({ variableId: 'pnpkey1_aux3_enabled', name: 'PnP/Key 1 enabled on Aux 3'})
        variables.push({ variableId: 'pnpkey2_aux3_enabled', name: 'PnP/Key 2 enabled on Aux 3'})
        variables.push({ variableId: 'pnpkey3_aux3_enabled', name: 'PnP/Key 3 enabled on Aux 3'})
        variables.push({ variableId: 'pnpkey4_aux3_enabled', name: 'PnP/Key 4 enabled on Aux 3'})
        variables.push({ variableId: 'dsk1_aux3_enabled', name: 'DSK 1 enabled on Aux 3'})
        variables.push({ variableId: 'dsk2_aux3_enabled', name: 'DSK 2 enabled on Aux 3'})

		//Output Assigns
		variables.push({ variableId: 'hdmi1', name: 'HDMI Output 1 Source' })
		variables.push({ variableId: 'hdmi2', name: 'HDMI Output 2 Source' })
		variables.push({ variableId: 'hdmi3', name: 'HDMI Output 3 Source' })
		variables.push({ variableId: 'sdi1', name: 'SDI Output 1 Source' })
		variables.push({ variableId: 'sdi2', name: 'SDI Output 2 Source' })
		variables.push({ variableId: 'sdi3', name: 'SDI Output 3 Source' })
		variables.push({ variableId: 'usb', name: 'USB Output Source' })

		//Aux Assigns
		variables.push({ variableId: 'aux1', name: 'Aux 1 Source' })
		variables.push({ variableId: 'aux2', name: 'Aux 2 Source' })
		variables.push({ variableId: 'aux3', name: 'Aux 3 Source' })

		variables.push({ variableId: 'aux1_mute', name: 'Aux 1 Mute' })
		variables.push({ variableId: 'aux2_mute', name: 'Aux 2 Mute' })
		variables.push({ variableId: 'aux3_mute', name: 'Aux 3 Mute' })

		variables.push({ variableId: 'auxlink_mode', name: 'Aux Link Mode' })
		variables.push({ variableId: 'aux1link', name: 'Aux Link' })
		variables.push({ variableId: 'aux2link', name: 'Aux Link' })
		variables.push({ variableId: 'aux3link', name: 'Aux Link' })

		variables.push({ variableI: 'freeze', name: 'Freeze On/Off' })

        //Audio Mutes
		variables.push({ variableId: 'audio_mute_audio1', name: 'Audio In 1 Mute' })
		variables.push({ variableId: 'audio_mute_audio2', name: 'Audio In 2 Mute' })
		variables.push({ variableId: 'audio_mute_audio3', name: 'Audio In 3/4 Mute' })
		variables.push({ variableId: 'audio_mute_usb_in', name: 'USB Audio In Mute' })
		variables.push({ variableId: 'audio_mute_bluetooth_in', name: 'Bluetooth Audio In Mute' })
		variables.push({ variableId: 'audio_mute_hdmi1', name: 'HDMI 1 Mute' })
		variables.push({ variableId: 'audio_mute_hdmi2', name: 'HDMI 2 Mute' })
		variables.push({ variableId: 'audio_mute_hdmi3', name: 'HDMI 3 Mute' })
		variables.push({ variableId: 'audio_mute_hdmi4', name: 'HDMI 4 Mute' })
		variables.push({ variableId: 'audio_mute_hdmi5', name: 'HDMI 5 Mute' })
		variables.push({ variableId: 'audio_mute_hdmi6', name: 'HDMI 6 Mute' })
		variables.push({ variableId: 'audio_mute_hdmi7', name: 'HDMI 7 Mute' })
		variables.push({ variableId: 'audio_mute_hdmi8', name: 'HDMI 8 Mute' })
		variables.push({ variableId: 'audio_mute_sdi1', name: 'SDI 1 Mute' })
		variables.push({ variableId: 'audio_mute_sdi2', name: 'SDI 2 Mute' })
		variables.push({ variableId: 'audio_mute_sdi3', name: 'SDI 3 Mute' })
		variables.push({ variableId: 'audio_mute_sdi4', name: 'SDI 4 Mute' })
		variables.push({ variableId: 'audio_mute_sdi5', name: 'SDI 5 Mute' })
		variables.push({ variableId: 'audio_mute_sdi6', name: 'SDI 6 Mute' })
		variables.push({ variableId: 'audio_mute_sdi7', name: 'SDI 7 Mute' })
		variables.push({ variableId: 'audio_mute_sdi8', name: 'SDI 8 Mute' })
        
        //Audio Follows
		variables.push({ variableId: 'audio_follow_audio1', name: 'Audio In 1 Audio Follow' })
		variables.push({ variableId: 'audio_follow_audio2', name: 'Audio In 2 Audio Follow' })
		variables.push({ variableId: 'audio_follow_audio3', name: 'Audio In 3/4 Audio Follow' })
		variables.push({ variableId: 'audio_follow_usb_in', name: 'USB Audio In Audio Follow' })
		variables.push({ variableId: 'audio_follow_bluetooth_in', name: 'Bluetooth Audio In Audio Follow' })
		variables.push({ variableId: 'audio_follow_hdmi1', name: 'HDMI 1 Audio Follow' })
		variables.push({ variableId: 'audio_follow_hdmi2', name: 'HDMI 2 Audio Follow' })
		variables.push({ variableId: 'audio_follow_hdmi3', name: 'HDMI 3 Audio Follow' })
		variables.push({ variableId: 'audio_follow_hdmi4', name: 'HDMI 4 Audio Follow' })
		variables.push({ variableId: 'audio_follow_hdmi5', name: 'HDMI 5 Audio Follow' })
		variables.push({ variableId: 'audio_follow_hdmi6', name: 'HDMI 6 Audio Follow' })
		variables.push({ variableId: 'audio_follow_hdmi7', name: 'HDMI 7 Audio Follow' })
		variables.push({ variableId: 'audio_follow_hdmi8', name: 'HDMI 8 Audio Follow' })
		variables.push({ variableId: 'audio_follow_sdi1', name: 'SDI 1 Audio Follow' })
		variables.push({ variableId: 'audio_follow_sdi2', name: 'SDI 2 Audio Follow' })
		variables.push({ variableId: 'audio_follow_sdi3', name: 'SDI 3 Audio Follow' })
		variables.push({ variableId: 'audio_follow_sdi4', name: 'SDI 4 Audio Follow' })
		variables.push({ variableId: 'audio_follow_sdi5', name: 'SDI 5 Audio Follow' })
		variables.push({ variableId: 'audio_follow_sdi6', name: 'SDI 6 Audio Follow' })
		variables.push({ variableId: 'audio_follow_sdi7', name: 'SDI 7 Audio Follow' })
		variables.push({ variableId: 'audio_follow_sdi8', name: 'SDI 8 Audio Follow' })
 
        //Audio Main Send
		variables.push({ variableId: 'audio_main_send_audio1', name: 'Audio In 1 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_audio2', name: 'Audio In 2 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_audio3', name: 'Audio In 3/4 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_usb_in', name: 'USB Audio In Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_bluetooth_in', name: 'Bluetooth Audio In Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_hdmi1', name: 'HDMI 1 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_hdmi2', name: 'HDMI 2 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_hdmi3', name: 'HDMI 3 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_hdmi4', name: 'HDMI 4 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_hdmi5', name: 'HDMI 5 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_hdmi6', name: 'HDMI 6 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_hdmi7', name: 'HDMI 7 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_hdmi8', name: 'HDMI 8 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_sdi1', name: 'SDI 1 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_sdi2', name: 'SDI 2 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_sdi3', name: 'SDI 3 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_sdi4', name: 'SDI 4 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_sdi5', name: 'SDI 5 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_sdi6', name: 'SDI 6 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_sdi7', name: 'SDI 7 Audio Main Send' })
		variables.push({ variableId: 'audio_main_send_sdi8', name: 'SDI 8 Audio Main Send' })

        //Audio Output Sources
		variables.push({ variableId: 'audio_output_source_xlr', name: 'XLR Audio Out Source' })
		variables.push({ variableId: 'audio_output_source_rca', name: 'RCA Audio Out Source' })
		variables.push({ variableId: 'audio_output_source_headphones', name: 'Headphones Source' })
		variables.push({ variableId: 'audio_output_source_usb', name: 'USB Audio Out Source' })
		variables.push({ variableId: 'audio_output_source_hdmi1', name: 'HDMI Output 1 Audio Source' })
		variables.push({ variableId: 'audio_output_source_hdmi2', name: 'HDMI Output 2 Audio Source' })
		variables.push({ variableId: 'audio_output_source_hdmi3', name: 'HDMI Output 3 Audio Source' })
		variables.push({ variableId: 'audio_output_source_sdi1', name: 'SDI Output 1 Audio Source' })
		variables.push({ variableId: 'audio_output_source_sdi2', name: 'SDI Output 2 Audio Source' })
		variables.push({ variableId: 'audio_output_source_sdi3', name: 'SDI Output 3 Audio Source' })

		//memory names
		for (let i = 1; i <= 30; i++) {
			variables.push({ variableId: 'memoryname_' + i, name: 'Memory Name' + i })
		}

		//last memory loaded, number and name
		variables.push({ variableId: 'lastmemorynumber', name: 'Last Memory Number Loaded' })
		variables.push({ variableId: 'lastmemoryname', name: 'Last Memory Name Loaded' })

		self.setVariableDefinitions(variables)
	},

	checkVariables: function () {
		let self = this

		try {
			let variableObj = {}

			variableObj.model = self.MODEL
			variableObj.version = self.VERSION

			for (let i = 0; i < self.TALLYDATA.length; i++) {
				let state = 'Off'

				if (self.TALLYDATA[i].status == 1 || self.TALLYDATA[i].status == 3) {
					state = 'Program'
				} else if (self.TALLYDATA[i].status == 2) {
					state = 'Preview'
				}

				variableObj['tally_' + self.TALLYDATA[i].shortlabel] = state
			}

			//PnP/Keys
			variableObj.pnpkey1_pgm = self.DATA.data_1B00 == '01' ? 'On' : 'Off'
			variableObj.pnpkey1_pvw = self.DATA.data_1B01 == '01' ? 'On' : 'Off'
			variableObj.pnpkey2_pgm = self.DATA.data_1C00 == '01' ? 'On' : 'Off'
			variableObj.pnpkey2_pvw = self.DATA.data_1C01 == '01' ? 'On' : 'Off'
			variableObj.pnpkey3_pgm = self.DATA.data_1D00 == '01' ? 'On' : 'Off'
			variableObj.pnpkey3_pvw = self.DATA.data_1D01 == '01' ? 'On' : 'Off'
			variableObj.pnpkey4_pgm = self.DATA.data_1E00 == '01' ? 'On' : 'Off'
			variableObj.pnpkey4_pvw = self.DATA.data_1E01 == '01' ? 'On' : 'Off'

            //PnP/Keys Enabbled
            //Treating Always as On
			variableObj.pnpkey1_pgm_enabled = self.DATA.data_000012 == '00' ? 'Off' : 'On'
			variableObj.pnpkey2_pgm_enabled = self.DATA.data_000013 == '00' ? 'Off' : 'On'
			variableObj.pnpkey3_pgm_enabled = self.DATA.data_000014 == '00' ? 'Off' : 'On'
			variableObj.pnpkey4_pgm_enabled = self.DATA.data_000015 == '00' ? 'Off' : 'On'
			variableObj.dsk1_pgm_enabled = self.DATA.data_000016 == '00' ? 'Off' : 'On'
			variableObj.dsk2_pgm_enabled = self.DATA.data_000017 == '00' ? 'Off' : 'On'
			variableObj.pnpkey1_sub_pgm_enabled = self.DATA.data_000018 == '00' ? 'Off' : 'On'
			variableObj.pnpkey2_sub_pgm_enabled = self.DATA.data_000019 == '00' ? 'Off' : 'On'
			variableObj.pnpkey3_sub_pgm_enabled = self.DATA.data_00001A == '00' ? 'Off' : 'On'
			variableObj.pnpkey4_sub_pgm_enabled = self.DATA.data_00001B == '00' ? 'Off' : 'On'
			variableObj.dsk1_sub_pgm_enabled = self.DATA.data_00001C == '00' ? 'Off' : 'On'
			variableObj.dsk2_sub_pgm_enabled = self.DATA.data_00001D == '00' ? 'Off' : 'On'
			variableObj.pnpkey1_aux1_enabled = self.DATA.data_00001E == '00' ? 'Off' : 'On'
			variableObj.pnpkey2_aux1_enabled = self.DATA.data_00001F == '00' ? 'Off' : 'On'
			variableObj.pnpkey3_aux1_enabled = self.DATA.data_000020 == '00' ? 'Off' : 'On'
			variableObj.pnpkey4_aux1_enabled = self.DATA.data_000021 == '00' ? 'Off' : 'On'
			variableObj.dsk1_aux1_enabled = self.DATA.data_000022 == '00' ? 'Off' : 'On'
			variableObj.dsk2_aux1_enabled = self.DATA.data_000023 == '00' ? 'Off' : 'On'
			variableObj.pnpkey1_aux2_enabled = self.DATA.data_000030 == '00' ? 'Off' : 'On'
			variableObj.pnpkey2_aux2_enabled = self.DATA.data_000031 == '00' ? 'Off' : 'On'
			variableObj.pnpkey3_aux2_enabled = self.DATA.data_000032 == '00' ? 'Off' : 'On'
			variableObj.pnpkey4_aux2_enabled = self.DATA.data_000033 == '00' ? 'Off' : 'On'
			variableObj.dsk1_aux2_enabled = self.DATA.data_000034 == '00' ? 'Off' : 'On'
			variableObj.dsk2_aux2_enabled = self.DATA.data_000035 == '00' ? 'Off' : 'On'
			variableObj.pnpkey1_aux3_enabled = self.DATA.data_000036 == '00' ? 'Off' : 'On'
			variableObj.pnpkey2_aux3_enabled = self.DATA.data_000037 == '00' ? 'Off' : 'On'
			variableObj.pnpkey3_aux3_enabled = self.DATA.data_000038 == '00' ? 'Off' : 'On'
			variableObj.pnpkey4_aux3_enabled = self.DATA.data_000039 == '00' ? 'Off' : 'On'
			variableObj.dsk1_aux3_enabled = self.DATA.data_00003A == '00' ? 'Off' : 'On'
			variableObj.dsk2_aux3_enabled = self.DATA.data_00003B == '00' ? 'Off' : 'On'

			//pnpkey sources
			variableObj['pnpkey1_source'] = self.DATA.pnpkey1sourcename
			variableObj['pnpkey2_source'] = self.DATA.pnpkey2sourcename
			variableObj['pnpkey3_source'] = self.DATA.pnpkey3sourcename
			variableObj['pnpkey4_source'] = self.DATA.pnpkey4sourcename

			//Output Assigns
			let hdmi1assign = self.CHOICES_OUTPUTSASSIGN.find((item) => {
				return item.id == self.DATA.hdmi1assign
			})
			let hdmi2assign = self.CHOICES_OUTPUTSASSIGN.find((item) => {
				return item.id == self.DATA.hdmi2assign
			})
			let hdmi3assign = self.CHOICES_OUTPUTSASSIGN.find((item) => {
				return item.id == self.DATA.hdmi3assign
			})
			let sdi1assign = self.CHOICES_OUTPUTSASSIGN.find((item) => {
				return item.id == self.DATA.sdi1assign
			})
			let sdi2assign = self.CHOICES_OUTPUTSASSIGN.find((item) => {
				return item.id == self.DATA.sdi2assign
			})
			let sdi3assign = self.CHOICES_OUTPUTSASSIGN.find((item) => {
				return item.id == self.DATA.sdi3assign
			})
			let usbassign = self.CHOICES_OUTPUTSASSIGN.find((item) => {
				return item.id == self.DATA.usbassign
			})

			if (hdmi1assign !== undefined) {
				variableObj.hdmi1 = hdmi1assign.label
			} else {
				variableObj.hdmi1 = self.DATA.hdmi1assign
			}

			if (hdmi2assign !== undefined) {
				variableObj.hdmi2 = hdmi2assign.label
			} else {
				variableObj.hdmi2 = self.DATA.hdmi2assign
			}

			if (hdmi3assign !== undefined) {
				variableObj.hdmi3 = hdmi3assign.label
			} else {
				variableObj.hdmi3 = self.DATA.hdmi3assign
			}

			if (sdi1assign !== undefined) {
				variableObj.sdi1 = sdi1assign.label
			} else {
				variableObj.sdi1 = self.DATA.sdi1assign
			}

			if (sdi2assign !== undefined) {
				variableObj.sdi2 = sdi2assign.label
			} else {
				variableObj.sdi2 = self.DATA.sdi2assign
			}

			if (sdi3assign !== undefined) {
				variableObj.sdi3 = sdi3assign.label
			} else {
				variableObj.sdi3 = self.DATA.sdi3assign
			}

			if (usbassign !== undefined) {
				variableObj.usb = usbassign.label
			} else {
				variableObj.usb = self.DATA.usbassign
			}

			//Aux Sources
			let aux1source = self.CHOICES_PGMPVW_SELECT.find((item) => {
				return item.id == self.DATA.aux1source
			})
			let aux2source = self.CHOICES_PGMPVW_SELECT.find((item) => {
				return item.id == self.DATA.aux2source
			})
			let aux3source = self.CHOICES_PGMPVW_SELECT.find((item) => {
				return item.id == self.DATA.aux3source
			})

			if (aux1source !== undefined) {
				variableObj.aux1 = aux1source.label
			} else {
				variableObj.aux1 = self.DATA.aux1source
			}

			if (aux2source !== undefined) {
				variableObj.aux2 = aux2source.label
			} else {
				variableObj.aux2 = self.DATA.aux2source
			}

			if (aux3source !== undefined) {
				variableObj.aux3 = aux3source.label
			} else {
				variableObj.aux3 = self.DATA.aux3source
			}

			//Aux Mutes
			variableObj.aux1_mute = self.DATA.aux1mute == '01' ? 'On' : 'Off'
			variableObj.aux2_mute = self.DATA.aux2mute == '01' ? 'On' : 'Off'
			variableObj.aux3_mute = self.DATA.aux3mute == '01' ? 'On' : 'Off'

			//Aux Links
			variableObj.auxlink_mode =
				self.DATA.auxlinkmode == '00' ? 'Off' : self.DATA.auxlinkmode == '01' ? 'Auto Link' : 'Manual Link'
			variableObj.aux1link = self.DATA.aux1link == '01' ? 'On' : 'Off'
			variableObj.aux2link = self.DATA.aux2link == '01' ? 'On' : 'Off'
			variableObj.aux3link = self.DATA.aux3link == '01' ? 'On' : 'Off'

			//Freeze
			variableObj.freeze = self.DATA.freeze == '01' ? 'On' : 'Off'

            //Audio Input Mutes
			for (let i = 0; i < self.CHOICES_INPUTS_AUDIO_ALL.length; i++) {
				let id = self.CHOICES_INPUTS_AUDIO_ALL[i].id
				let shortLabel = self.CHOICES_INPUTS_AUDIO_ALL[i].shortlabel
                let dataName = 'audiomute-' + id
                if (self.DATA[dataName]) {
                    variableObj['audio_mute_' + shortLabel] = self.DATA[dataName] == '01' ? 'On' : 'Off'
                }
			}

            //Audio Follow Self
 			for (let i = 0; i < self.CHOICES_INPUTS_VIDEO.length; i++) {
                let id = self.CHOICES_INPUTS_VIDEO[i].id
                let shortLabel = self.CHOICES_INPUTS_VIDEO[i].shortlabel
                let dataName = 'audiofollow-' + id
                if (self.DATA[dataName]) {
                    variableObj['audio_follow_' + shortLabel] = self.DATA[dataName] == '01' ? 'On' : 'Off'
                }
            }

            //Audio Follows Other
 			for (let i = 0; i < self.CHOICES_INPUTS_AUDIO.length; i++) {
                let id = self.CHOICES_INPUTS_AUDIO[i].id
                let shortLabel = self.CHOICES_INPUTS_AUDIO[i].shortlabel
                let dataName = 'audiofollow-' + id
                if (self.DATA[dataName]) {
                    let dataValue = self.DATA[dataName]
                    let followValue = self.CHOICES_AUDIO_FOLLOW_SOURCES.find(x => x.id == dataValue).label
                    variableObj['audio_follow_' + shortLabel] = followValue
                }
            }

            //Audio Output Source 
			for (let i = 0; i < self.CHOICES_OUTPUTS_AUDIO.length; i++) {
				let id = self.CHOICES_OUTPUTS_AUDIO[i].id
				let shortLabel = self.CHOICES_OUTPUTS_AUDIO[i].shortlabel
                let dataName = 'audio-output-source-' + id
                if (self.DATA[dataName]) {
                    let dataValue = parseInt(self.DATA[dataName], 16)
                    if (id == '00' || id == '01' || id == '02') {
                        dataValue += 1 //No Auto Choice on Audio only Outputs
                    }
                    let followValue = self.CHOICES_OUTPUTSASSIGN_AUDIO.find(x => x.id == dataValue).label
                    variableObj['audio_output_source_' + shortLabel] = followValue
                }
			}

			self.setVariableValues(variableObj)
		} catch (error) {
			self.log('error', 'Error setting Variables from Device: ' + String(error))
		}
	},
}

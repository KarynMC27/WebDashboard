// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
    console.log(req.query.slug);
    res.status(200).json({
        "config_name": "Base",
        "groups": {
            "Direct_Motors": {
                "High_Z": {
                    "status": "Connected",
                    "value": "-3.92100 mm",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Low_Z": {
                    "status": "Connected",
                    "value": "44.00000 mm",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Upper_gonio": {
                    "status": "Connected",
                    "value": "2.30000 deg",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SM2_ang_dir": {
                    "status": "Connected",
                    "value": "0.75000 deg",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SM2_ht_dir": {
                    "status": "Connected",
                    "value": "-22.99850 mm",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "ROTATION": {
                    "status": "Connected",
                    "value": "2.317 deg",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "DRAD_EXTERNAL": {
                    "status": "Connected",
                    "value": "588.680 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "DRAD_INTERNAL": {
                    "status": "Connected",
                    "value": "2447.480 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "DOFF_ANGLED": {
                    "status": "Connected",
                    "value": "-10.000 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "HORIZ_TRANSL": {
                    "status": "Connected",
                    "value": "2387.356 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "COMBINED_Y": {
                    "status": "Connected",
                    "value": "149.534 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "DOFF_PARALLEL": {
                    "status": "Connected",
                    "value": "8.230 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "DRAD_INT_OFF": {
                    "status": "Connected",
                    "value": "-0.234 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "DTANK_LENGTH": {
                    "status": "Connected",
                    "value": "2447.460 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "PIVOT_TO_WINDOW": {
                    "status": "Connected",
                    "value": "1836.800 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "DRAD": {
                    "status": "Connected",
                    "value": "3036.160 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "MEASUREMENT_ANGLE": {
                    "status": "Connected",
                    "value": "4.600 deg",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "OFFSET_MEAS_ANG": {
                    "status": "Connected",
                    "value": "-2.301 deg",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "ROT_VIRT": {
                    "status": "Connected",
                    "value": "2.065 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SAMPLE_ROT": {
                    "status": "Connected",
                    "value": "0.000 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SAMPLE_Y": {
                    "status": "Connected",
                    "value": "0.000 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "COMBINED_Y_VIRT": {
                    "status": "Connected",
                    "value": "98.022 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SAMPLE_HORIZONTAL": {
                    "status": "Connected",
                    "value": "0.000 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "HORIZ_VIRT": {
                    "status": "Connected",
                    "value": "2423.516 um",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                }
            },
            "PUMP": {
                "Knauer": {
                    "status": "Connected",
                    "value": "1",
                    "alarm": "INVALID/TIMEOUT_ALARM",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Pump_is_on": {
                    "status": "Connected",
                    "value": "Off",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Component_A": {
                    "status": "Connected",
                    "value": "0 %",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Component_B": {
                    "status": "Connected",
                    "value": "0 %",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Component_C": {
                    "status": "Connected",
                    "value": "100 %",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Component_D": {
                    "status": "Connected",
                    "value": "0 %",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "hplcflow": {
                    "status": "Connected",
                    "value": "0.000 mL/min",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Remaining_pump_time": {
                    "status": "Connected",
                    "value": "0 s",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Remaining_Volume": {
                    "status": "Connected",
                    "value": "0.000 mL",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Pump_for_Time": {
                    "status": "Connected",
                    "value": "0 s",
                    "alarm": "INVALID/UDF_ALARM",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Pump_for_Volume": {
                    "status": "Connected",
                    "value": "0.010 mL",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "start_pump": {
                    "status": "Connected",
                    "value": "Start",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "stop_pump": {
                    "status": "Connected",
                    "value": "Stop",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "start_pump_for_volume": {
                    "status": "Connected",
                    "value": "",
                    "alarm": "INVALID/UDF_ALARM",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "start_pump_for_time": {
                    "status": "Connected",
                    "value": "",
                    "alarm": "INVALID/UDF_ALARM",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                }
            },
            "Main": {
                "THETA": {
                    "status": "Connected",
                    "value": "2.300",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "MONITOR": {
                    "status": "Connected",
                    "value": "IN",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "HEIGHT": {
                    "status": "Connected",
                    "value": "-3.921 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "HEIGHT2": {
                    "status": "Connected",
                    "value": "44.000 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "PHI": {
                    "status": "Connected",
                    "value": "2.299 deg",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "PSI": {
                    "status": "Connected",
                    "value": "-0.347 deg",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "TRANS": {
                    "status": "Connected",
                    "value": "400.004 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "MODE": {
                    "status": "Connected",
                    "value": "Liquid",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SM1INBEAM": {
                    "status": "Connected",
                    "value": "OUT",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SM2INBEAM": {
                    "status": "Connected",
                    "value": "OUT",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SAMPINBEAM": {
                    "status": "Connected",
                    "value": "IN",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SM2ANGLE": {
                    "status": "Connected",
                    "value": "0.750 deg",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SM2OFFSET": {
                    "status": "Connected",
                    "value": "-22.998 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SM1ANGLE": {
                    "status": "Connected",
                    "value": "0.000 deg",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "SM1OFFSET": {
                    "status": "Connected",
                    "value": "-30.000 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Resolution": {
                    "status": "Connected",
                    "value": "NAN",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Footprint": {
                    "status": "Connected",
                    "value": "NAN",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "CALIB_ROT": {
                    "status": "Connected",
                    "value": "0.252",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "CALIB_Y": {
                    "status": "Connected",
                    "value": "51.512",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "CALIB_HORIZONTAL": {
                    "status": "Connected",
                    "value": "-36.160",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                }
            },
            "Slits": {
                "S1VG": {
                    "status": "Connected",
                    "value": "5.555 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S1AVG": {
                    "status": "Connected",
                    "value": "9.998 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S2VG": {
                    "status": "Connected",
                    "value": "2.957 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S3VG": {
                    "status": "Connected",
                    "value": "15.000 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S1VC": {
                    "status": "Connected",
                    "value": "-1.718 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S1AVC": {
                    "status": "Connected",
                    "value": "-0.001 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S2VC": {
                    "status": "Connected",
                    "value": "0.0005 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S2OFFSET": {
                    "status": "Connected",
                    "value": "0.0001 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S3VC": {
                    "status": "Connected",
                    "value": "2.200 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S3N": {
                    "status": "Connected",
                    "value": "9.700",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S3S": {
                    "status": "Connected",
                    "value": "5.300",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S1HG": {
                    "status": "Connected",
                    "value": "54.962 mm",
                    "alarm": "MAJOR/LINK_ALARM",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S2HG": {
                    "status": "Connected",
                    "value": "50.001 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S3HG": {
                    "status": "Connected",
                    "value": "80.000 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S1HC": {
                    "status": "Connected",
                    "value": "2.519 mm",
                    "alarm": "MAJOR/LINK_ALARM",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S2HC": {
                    "status": "Connected",
                    "value": "0.004 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S3HC": {
                    "status": "Connected",
                    "value": "0.000 mm",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "S3BLOCK": {
                    "status": "Connected",
                    "value": "No",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                }
            },
            "Status": {
                "SHUTTERSTATUS": {
                    "status": "Connected",
                    "value": "OPEN",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.5",
                    "rc_high": "1.5",
                    "rc_inrange": "YES",
                    "rc_enabled": "YES"
                },
                "MethanTemp": {
                    "status": "Connected",
                    "value": "0.000 K",
                    "alarm": "",
                    "visibility": false,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "TankVac": {
                    "status": "Connected",
                    "value": "0.008 mbar",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.1",
                    "rc_inrange": "YES",
                    "rc_enabled": "YES"
                },
                "ClocheVac": {
                    "status": "Connected",
                    "value": "0.038 mbar",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.1",
                    "rc_inrange": "YES",
                    "rc_enabled": "YES"
                },
                "TS2_Beam": {
                    "status": "Connected",
                    "value": "38.610 uA",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "H2_Mod_Temp": {
                    "status": "Connected",
                    "value": "17.030 K",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "20.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "YES"
                }
            },
            "NONE": {
                "KEYENCE": {
                    "status": "Connected",
                    "value": "0.0000",
                    "alarm": "INVALID/TIMEOUT_ALARM",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Julabo01_T_EXT": {
                    "status": "Connected",
                    "value": "0.0 C",
                    "alarm": "INVALID/CALC_ALARM",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Julabo01_T_RB": {
                    "status": "Connected",
                    "value": "22.3 C",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                },
                "Julabo01_T_SP": {
                    "status": "Connected",
                    "value": "25.0 C",
                    "alarm": "",
                    "visibility": true,
                    "rc_low": "0.0",
                    "rc_high": "0.0",
                    "rc_inrange": "YES",
                    "rc_enabled": "NO"
                }
            }
        },
        "inst_pvs": {
            "RUNSTATE": {
                "status": "Connected",
                "value": "RUNNING",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "RUNNUMBER": {
                "status": "Connected",
                "value": "00073615",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "_RBNUMBER": {
                "status": "Connected",
                "value": "0",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "TITLE": {
                "status": "Connected",
                "value": "D2O G=8.23 F=-10 beam-blocker hg=80 th=2.3 ['SM2']=0.0",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "_USERNAME": {
                "status": "Connected",
                "value": "",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "STARTTIME": {
                "status": "Connected",
                "value": "Fri 16-Feb-2024 14:31:39",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "RUNDURATION": {
                "status": "Connected",
                "value": "7 min 10 s",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "RUNDURATION_PD": {
                "status": "Connected",
                "value": "7 min 10 s",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "GOODFRAMES": {
                "status": "Connected",
                "value": "4306",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "GOODFRAMES_PD": {
                "status": "Connected",
                "value": "4296",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "RAWFRAMES": {
                "status": "Connected",
                "value": "4306",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "RAWFRAMES_PD": {
                "status": "Connected",
                "value": "4296",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "PERIOD": {
                "status": "Connected",
                "value": "1",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "NUMPERIODS": {
                "status": "Connected",
                "value": "1",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "PERIODSEQ": {
                "status": "Connected",
                "value": "0",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "BEAMCURRENT": {
                "status": "Connected",
                "value": "38.199 uA",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "TOTALUAMPS": {
                "status": "Connected",
                "value": "4.601 uA hour",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "COUNTRATE": {
                "status": "Connected",
                "value": "507.130",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "DAEMEMORYUSED": {
                "status": "Connected",
                "value": "40261 byte",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "TOTALCOUNTS": {
                "status": "Connected",
                "value": "6E+07 count",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "DAETIMINGSOURCE": {
                "status": "Connected",
                "value": "ISIS",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "MONITORCOUNTS": {
                "status": "Connected",
                "value": "2E+07 count",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "MONITORSPECTRUM": {
                "status": "Connected",
                "value": "3",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "MONITORFROM": {
                "status": "Connected",
                "value": "1000.000 us",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "MONITORTO": {
                "status": "Connected",
                "value": "20000.000 us",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "NUMTIMECHANNELS": {
                "status": "Connected",
                "value": "5000",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "NUMSPECTRA": {
                "status": "Connected",
                "value": "2060",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "SHUTTER": {
                "status": "Connected",
                "value": "OPEN",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "SIM_MODE": {
                "status": "Connected",
                "value": "No",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "BANNER:RIGHT:LABEL": {
                "status": "Connected",
                "value": "Shutter:",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "BANNER:MIDDLE:LABEL": {
                "status": "Connected",
                "value": "",
                "alarm": "INVALID/LINK_ALARM",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "BANNER:LEFT:LABEL": {
                "status": "Connected",
                "value": "Run:",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "1:1:LABEL": {
                "status": "Connected",
                "value": "Good / Raw Frames:",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "2:1:LABEL": {
                "status": "Connected",
                "value": "Current / Total:",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "3:1:LABEL": {
                "status": "Connected",
                "value": "Monitor Counts:",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "1:2:LABEL": {
                "status": "Connected",
                "value": "Inst. Time:",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "2:2:LABEL": {
                "status": "Connected",
                "value": "Run Time:",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "3:2:LABEL": {
                "status": "Connected",
                "value": "Period:",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "1:1:VALUE": {
                "status": "Connected",
                "value": "4306 / 4306",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "2:1:VALUE": {
                "status": "Connected",
                "value": "38.199 / 4.612",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "3:1:VALUE": {
                "status": "Connected",
                "value": "24287579",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "1:2:VALUE": {
                "status": "Connected",
                "value": "02/16/2024 14:38:50",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "2:2:VALUE": {
                "status": "Connected",
                "value": "00:07:10",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "3:2:VALUE": {
                "status": "Connected",
                "value": "1 / 1",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "BANNER:LEFT:VALUE": {
                "status": "Connected",
                "value": "00073615",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "BANNER:MIDDLE:VALUE": {
                "status": "Connected",
                "value": "",
                "alarm": "INVALID/LINK_ALARM",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "BANNER:RIGHT:VALUE": {
                "status": "Connected",
                "value": "OPEN",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            },
            "TIME_OF_DAY": {
                "status": "Connected",
                "value": "02/16/2024 14:38:50",
                "alarm": "",
                "visibility": true,
                "rc_enabled": "NO"
            }
        },
        "error_statuses": [],
        "time_diff": 10,
        "out_of_sync": false
    }
    );
  }
  
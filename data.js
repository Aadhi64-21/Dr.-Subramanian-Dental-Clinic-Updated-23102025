var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.23908752378210885,
          "pitch": -0.04096448925205287,
          "rotation": 4.71238898038469,
          "target": "2-waiting-02"
        },
        {
          "yaw": -0.010546485077487233,
          "pitch": -0.04332982414367237,
          "rotation": 3.141592653589793,
          "target": "3-reception"
        },
        {
          "yaw": 0.15461523492939655,
          "pitch": 0.09810511866777638,
          "rotation": 3.141592653589793,
          "target": "1-waiting-01"
        },
        {
          "yaw": -0.47421576655458964,
          "pitch": 0.02084815691832631,
          "rotation": 5.497787143782138,
          "target": "4-first-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-waiting-01",
      "name": "Waiting 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.012525803365354804,
        "pitch": -0.03559660590367564,
        "fov": 0.9957161224134213
      },
      "linkHotspots": [
        {
          "yaw": -0.21206561740117635,
          "pitch": -0.03235096591311759,
          "rotation": 3.141592653589793,
          "target": "2-waiting-02"
        },
        {
          "yaw": 0.5365817557862638,
          "pitch": -0.028156047142122276,
          "rotation": 3.141592653589793,
          "target": "3-reception"
        },
        {
          "yaw": -1.7290150214703868,
          "pitch": -0.06940392898221504,
          "rotation": 0,
          "target": "4-first-floor-lobby"
        },
        {
          "yaw": -2.5913876168349947,
          "pitch": -0.0011146585665287034,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-waiting-02",
      "name": "Waiting 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.018975451233810503,
        "pitch": 0,
        "fov": 0.9737402060820023
      },
      "linkHotspots": [
        {
          "yaw": 2.0192353382266157,
          "pitch": -0.008160535616788422,
          "rotation": 0,
          "target": "3-reception"
        },
        {
          "yaw": -1.727900311105337,
          "pitch": 0.03855457524650774,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": -1.444450225590117,
          "pitch": 0.020409241053691574,
          "rotation": 0,
          "target": "4-first-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": -0.5473495348179522,
          "pitch": -0.05381198641444662,
          "rotation": 0,
          "target": "2-waiting-02"
        },
        {
          "yaw": -1.6485942146803438,
          "pitch": -0.02846798186861932,
          "rotation": 0,
          "target": "1-waiting-01"
        },
        {
          "yaw": -1.1748979717938433,
          "pitch": -0.044090175977320456,
          "rotation": 0,
          "target": "4-first-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-first-floor-lobby",
      "name": "First floor lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.08800956033594787,
        "pitch": -0.030086262533860264,
        "fov": 1.051974475782897
      },
      "linkHotspots": [
        {
          "yaw": 0.605958721950909,
          "pitch": 0.008670864049900473,
          "rotation": 7.853981633974483,
          "target": "5-dental-op"
        },
        {
          "yaw": 2.8749232752352514,
          "pitch": -0.2604908841323397,
          "rotation": 0,
          "target": "10-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dental-op",
      "name": "Dental OP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.009620244204615602,
        "pitch": 0,
        "fov": 0.9934649897509717
      },
      "linkHotspots": [
        {
          "yaw": -0.10883350460946417,
          "pitch": 0.06382251488022206,
          "rotation": 4.71238898038469,
          "target": "9-treatment-op---03"
        },
        {
          "yaw": 0.08789044341924956,
          "pitch": 0.0723165422712917,
          "rotation": 0,
          "target": "8-treatment-op---02"
        },
        {
          "yaw": 0.10005880529626943,
          "pitch": 0.25561872450295553,
          "rotation": 3.141592653589793,
          "target": "7-treatment-op---01"
        },
        {
          "yaw": -0.259506929752801,
          "pitch": 0.13131159474562892,
          "rotation": 4.71238898038469,
          "target": "10-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dental-op-01",
      "name": "Dental OP 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6915517790147305,
          "pitch": -0.006016267906757022,
          "rotation": 3.141592653589793,
          "target": "5-dental-op"
        },
        {
          "yaw": 1.1398094845944673,
          "pitch": 0.16287888728118105,
          "rotation": 3.141592653589793,
          "target": "7-treatment-op---01"
        },
        {
          "yaw": 1.2828049035215248,
          "pitch": 0.018056207814531433,
          "rotation": 0,
          "target": "8-treatment-op---02"
        },
        {
          "yaw": 1.0245130719644209,
          "pitch": -0.008386562847583434,
          "rotation": 4.71238898038469,
          "target": "9-treatment-op---03"
        },
        {
          "yaw": 0.6902138473469126,
          "pitch": 0.016660721034012838,
          "rotation": 0,
          "target": "10-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-treatment-op---01",
      "name": "Treatment OP - 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9737857912495613,
        "pitch": 0.026642693111028848,
        "fov": 0.9477206316148126
      },
      "linkHotspots": [
        {
          "yaw": -2.961535278154919,
          "pitch": 0.09011977940731697,
          "rotation": 3.141592653589793,
          "target": "5-dental-op"
        },
        {
          "yaw": -2.1412386189467725,
          "pitch": 0.12183227180250178,
          "rotation": 0,
          "target": "10-second-floor-lobby"
        },
        {
          "yaw": -0.6915655731573587,
          "pitch": 0.11461895057298577,
          "rotation": 0,
          "target": "9-treatment-op---03"
        },
        {
          "yaw": 0.09104770716589172,
          "pitch": 0.1084984996785181,
          "rotation": 3.141592653589793,
          "target": "8-treatment-op---02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-treatment-op---02",
      "name": "Treatment OP - 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.027254620413030395,
          "pitch": -0.0972232351625486,
          "rotation": 3.141592653589793,
          "target": "9-treatment-op---03"
        },
        {
          "yaw": -0.977269891529474,
          "pitch": 0.05259042946990178,
          "rotation": 0,
          "target": "10-second-floor-lobby"
        },
        {
          "yaw": -1.4368040274034612,
          "pitch": 0.05028643747406214,
          "rotation": 0,
          "target": "5-dental-op"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-treatment-op---03",
      "name": "Treatment op - 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4199681292599493,
          "pitch": 0.03419057219471533,
          "rotation": 3.141592653589793,
          "target": "8-treatment-op---02"
        },
        {
          "yaw": -1.3716961491076152,
          "pitch": 0.06439757218613629,
          "rotation": 0.7853981633974483,
          "target": "5-dental-op"
        },
        {
          "yaw": -1.1775849052618312,
          "pitch": 0.056938100621412246,
          "rotation": 0.7853981633974483,
          "target": "10-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-second-floor-lobby",
      "name": "Second floor lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8982721623476522,
        "pitch": -0.026361627420953937,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 1.3736000090132165,
          "pitch": 0.036576370085676047,
          "rotation": 4.71238898038469,
          "target": "12-family-room"
        },
        {
          "yaw": -2.6027857489726234,
          "pitch": 0.07589197685847537,
          "rotation": 0,
          "target": "11-pediatric-op"
        },
        {
          "yaw": -1.321771144619527,
          "pitch": 0.14481878552902394,
          "rotation": 6.283185307179586,
          "target": "13-third-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pediatric-op",
      "name": "Pediatric OP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3433070672894107,
          "pitch": 0.03756655100234241,
          "rotation": 0,
          "target": "10-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-family-room",
      "name": "Family room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1062416551546956,
          "pitch": 0.1846243513882566,
          "rotation": 0.7853981633974483,
          "target": "10-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-third-floor-lobby",
      "name": "Third floor lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.33352660134249135,
          "pitch": 0.029718410569808285,
          "rotation": 0,
          "target": "14-md-room"
        },
        {
          "yaw": 2.643576283000308,
          "pitch": 0.1088716343296241,
          "rotation": 0,
          "target": "15-autoclave"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-md-room",
      "name": "MD Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.20955766438166812,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 2.7483786618130672,
          "pitch": 0.0569228072603174,
          "rotation": 0,
          "target": "13-third-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-autoclave",
      "name": "Autoclave",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.33325330079491877,
        "pitch": 0.0032942052896256513,
        "fov": 0.9477272153274726
      },
      "linkHotspots": [
        {
          "yaw": -2.957293691311005,
          "pitch": 0.007404205845389811,
          "rotation": 0,
          "target": "14-md-room"
        },
        {
          "yaw": -2.0130452442894935,
          "pitch": 0.12929745811072735,
          "rotation": 3.141592653589793,
          "target": "3-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

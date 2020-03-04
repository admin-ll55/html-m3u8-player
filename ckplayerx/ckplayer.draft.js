function ckplayerConfig() {
  return {
    flashvars: {
    },
    languagePath: '',
    stylePath: '',
    config: {
      fullInteractive: true,
      delay: 30,
      timeFrequency: 100,
      autoLoad: true,
      loadNext: 0,
      definition: true,
      smartRemove: true,
      bufferTime: 200,
      click: true,
      doubleClick: true,
      doubleClickInterval: 200,
      keyDown: {
        space: true,
        left: true,
        right: true,
        up: true,
        down: true
      },
      timeJump: 10,
      volumeJump: 0.1,
      timeScheduleAdjust: 1,
      previewDefaultLoad: true,
      promptSpotTime: false,
      buttonMode: {
        player: false,
        controlBar: false,
        timeSchedule: true,
        volumeSchedule: true
      },
      liveAndVod: {
        open: false,
        vodTime: 2,
        start: 'start'
      },
      errorNum: 3,
      playCorrect: false,
      timeCorrect: true,
      m3u8Definition: {
      },
      m3u8MaxBufferLength: 30,
      split: ',',
      timeStamp: '',
      addCallback: 'adPlay,adPause,playOrPause,videoPlay,videoPause,videoMute,videoEscMute,videoClear,changeVolume,fastBack,fastNext,videoSeek,newVideo,getMetaDate,videoRotation,videoBrightness,videoContrast,videoSaturation,videoHue,videoZoom,videoProportion,videoError,addListener,removeListener,addElement,getElement,deleteElement,animate,animateResume,animatePause,deleteAnimate,changeConfig,getConfig,openUrl,fullScreen,quitFullScreen,switchFull,screenshot,custom,changeControlBarShow,getCurrentSrc'
    },
    menu: {
      ckkey: '',
      name: '',
      link: '',
      version: '',
      domain: '',
      more: [
      ]
    },
    style: {
      loading: {
        file: 'data:image/swf;base64,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',
        align: 'center',
        vAlign: 'middle',
        offsetX: - 100,
        offsetY: - 40
      },
      logo: {
        file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAUAQMAAADCyjPtAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAAtJREFUCNdjGGEAAADwAAFOldjfAAAAAElFTkSuQmCC',
        align: 'right',
        vAlign: 'top',
        offsetX: - 100,
        offsetY: 10
      },
      advertisement: {
        time: 5,
        method: 'get',
        videoForce: false,
        videoVolume: 0.8,
        skipButtonShow: true,
        linkButtonShow: true,
        muteButtonShow: true,
        closeButtonShow: true,
        closeOtherButtonShow: true,
        frontSkipButtonDelay: 0,
        insertSkipButtonDelay: 0,
        endSkipButtonDelay: 0,
        frontStretched: 2,
        insertStretched: 2,
        pauseStretched: 2,
        endStretched: 2
      },
      video: {
        defaultWidth: 4,
        defaultHeight: 3
      }
    }
  }
}
!(function () {
  var javascriptPath = '';
  !function () {
    var scriptList = document.scripts,
    thisPath = scriptList[scriptList.length - 1].src;
    javascriptPath = thisPath.substring(0, thisPath.lastIndexOf('/') + 1)
  }();
  var ckplayer = function (obj) {
    this.config = {
      videoClick: true,
      videoDbClick: true,
      errorTime: 100,
      videoDrawImage: false
    };
    this.varsConfig = {
      playerID: '',
      container: '',
      variable: 'ckplayer',
      volume: 0.8,
      poster: '',
      autoplay: false,
      loop: false,
      live: false,
      duration: 0,
      seek: 0,
      drag: '',
      front: '',
      next: '',
      loaded: '',
      flashplayer: false,
      html5m3u8: false,
      track: null,
      cktrack: null,
      preview: null,
      prompt: null,
      video: null,
      config: '',
      type: '',
      crossorigin: '',
      crossdomain: '',
      unescape: false,
      mobileCkControls: false,
      playbackrate: 1,
      debug: false
    };
    this.vars = {
    };
    this.language = {
      volume: '音量：',
      play: '点击播放',
      pause: '点击暂停',
      full: '点击全屏',
      escFull: '退出全屏',
      mute: '点击静音',
      escMute: '取消静音',
      front: '上一集',
      next: '下一集',
      definition: '点击选择清晰度',
      playbackRate: '点击选择速度',
      error: '加载出错'
    };
    this.contextMenu = [
      ['ckplayer',
      'link',
      'http://www.ckplayer.com'],
      [
        'version:X',
        'default',
        'line'
      ]
    ];
    this.errorList = [
      ['000',
      'Object does not exist'],
      [
        '001',
        'Variables type is not a object'
      ],
      [
        '002',
        'Video object does not exist'
      ],
      [
        '003',
        'Video object format error'
      ],
      [
        '004',
        'Video object format error'
      ],
      [
        '005',
        'Video object format error'
      ],
      [
        '006',
        '[error] does not exist '
      ],
      [
        '007',
        'Ajax error'
      ],
      [
        '008',
        'Ajax error'
      ],
      [
        '009',
        'Ajax object format error'
      ],
      [
        '010',
        'Ajax.status:[error]'
      ]
    ];
    this.playbackRateArr = [
      [0.5,
      '0.5倍'],
      [
        1,
        '正常'
      ],
      [
        1.25,
        '1.25倍'
      ],
      [
        1.5,
        '1.5倍'
      ],
      [
        2,
        '2倍速'
      ],
      [
        4,
        '4倍速'
      ]
    ];
    this.playbackRateDefault = 1;
    this.logo = '';
    this.loaded = false;
    this.timerError = null;
    this.error = false;
    this.errorUrl = [
    ];
    this.timerFull = null;
    this.full = false;
    this.timerTime = null;
    this.timerBuffer = null;
    this.isTimeButtonMove = true;
    this.isTimeButtonDown = false;
    this.isClick = false;
    this.timerClick = null;
    this.timerLoading = null;
    this.timerCBar = null;
    this.needSeek = 0;
    this.volume = 0;
    this.volumeTemp = 0;
    this.time = 0;
    this.isFirst = true;
    this.html5Video = true;
    this.pdCoor = {
      x: 0,
      y: 0
    };
    this.playerType = '';
    this.loadTime = 0;
    this.body = document.body || document.documentElement;
    this.V = null;
    this.listenerJsArr = [
    ];
    this.buttonLen = 0;
    this.buttonArr = [
    ];
    this.buttonWidth = {
    };
    this.elementArr = [
    ];
    this.track = [
    ];
    this.trackIndex = 0;
    this.nowTrackShow = {
      sn: ''
    };
    this.trackElement = [
    ];
    this.timerVCanvas = null;
    this.animateArray = [
    ];
    this.animateElementArray = [
    ];
    this.animatePauseArray = [
    ];
    this.previewStart = 0;
    this.previewDiv = null;
    this.previewTop = null;
    this.previewWidth = 120;
    this.previewTween = null;
    this.isM3u8 = false;
    this.promptArr = [
    ];
    this.promptElement = null;
    this.ckplayerConfig = {
    };
    this.showFace = true;
    this.errorAdd = false;
    this.errorSend = false;
    this.controlBarIsShow = true;
    this.fontFamily = '"Microsoft YaHei"; YaHei; "FAE8F6F96C59ED1"; SimHei; "9ED1F53";Arial';
    this.timeSliderLeftTemp = 0;
    if (obj) {
      this.embed(obj)
    }
  };
  ckplayer.prototype = {
    embed: function (c) {
      if (window.location.href.substr(0, 7) == 'file://') {
        alert('Please use the HTTP protocol to open the page');
        return
      }
      if (c == undefined || !c) {
        this.eject(this.errorList[0]);
        return
      }
      if (typeof (c) != 'object') {
        this.eject(this.errorList[1])
      }
      this.vars = this.standardization(this.varsConfig, c);
      if (!this.vars['mobileCkControls'] && this.isMobile()) {
        this.vars['flashplayer'] = false;
        this.showFace = false
      }
      var videoString = this.vars['video'];
      if (!videoString) {
        this.eject(this.errorList[2]);
        return
      }
      if (typeof (videoString) == 'string') {
        if (videoString.substr(0, 3) == 'CK:' || videoString.substr(0, 3) == 'CE:' || videoString.substr(8, 3) == 'CK:' || videoString.substr(8, 3) == 'CE:') {
          this.vars['flashplayer'] = true
        }
      }
      if (this.vars['config']) {
        this.ckplayerConfig = eval(this.vars['config'] + '()')
      } else {
        this.ckplayerConfig = ckplayerConfig()
      }
      if ((!this.supportVideo() && this.vars['flashplayer'] != '') || (this.vars['flashplayer'] && this.uploadFlash()) || !this.isMsie()) {
        this.html5Video = false;
        this.getVideo()
      } else if (videoString) {
        this.analysedVideoUrl(videoString);
        return this
      } else {
        this.eject(this.errorList[2])
      }
    },
    analysedVideoUrl: function (video) {
      var i = 0,
      y = 0;
      var thisTemp = this;
      this.VA = [
      ];
      if (typeof (video) == 'string') {
        if (video.substr(0, 8) != 'website:') {
          this.VA = [
            [video,
            '',
            '',
            0]
          ];
          var fileExt = this.getFileExt(video);
          switch (fileExt) {
            case '.mp4':
              this.VA[0][1] = 'video/mp4';
              break;
            case '.ogg':
              this.VA[0][1] = 'video/ogg';
              break;
            case '.webm':
              this.VA[0][1] = 'video/webm';
              break;
            default:
              break
          }
          this.getVideo()
        } else {
          if (this.html5Video) {
            var ajaxObj = {
              url: video.substr(8),
              success: function (data) {
                if (data) {
                  thisTemp.analysedUrl(data)
                } else {
                  thisTemp.eject(thisTemp.errorList[5]);
                  this.VA = video;
                  thisTemp.getVideo()
                }
              }
            };
            this.ajax(ajaxObj)
          } else {
            this.VA = video;
            this.getVideo()
          }
        }
      } else if (typeof (video) == 'object') {
        if (!this.isUndefined(typeof (video.length))) {
          if (!this.isUndefined(typeof (video[0].length))) {
            this.VA = video
          }
          this.getVideo()
        } else {
          if (!this.isUndefined(video['type'])) {
            this.VA.push([video['file'],
            video['type'],
            '',
            0]);
            this.getVideo()
          } else {
            this.eject(this.errorList[5])
          }
        }
      } else {
        this.eject(this.errorList[4])
      }
    },
    analysedUrl: function (data) {
      this.vars = this.standardization(this.vars, data);
      if (!this.isUndefined(data['video'])) {
        this.vars['video'] = data['video']
      }
      this.analysedVideoUrl(this.vars['video'])
    },
    getHtml5Video: function () {
      var va = this.VA;
      var nva = [
      ];
      var mobile = false;
      var video = document.createElement('video');
      var codecs = function (type) {
        var cod = '';
        switch (type) {
          case 'video/mp4':
            cod = 'avc1.4D401E, mp4a.40.2';
            break;
          case 'video/ogg':
            cod = 'theora, vorbis';
            break;
          case 'video/webm':
            cod = 'vp8.0, vorbis';
            break;
          default:
            break
        }
        return cod
      };
      var supportType = function (vidType, codType) {
        if (!video.canPlayType) {
          this.html5Video = false;
          return
        }
        var isSupp = video.canPlayType(vidType + ';codecs="' + codType + '"');
        if (isSupp == '') {
          return false
        }
        return true
      };
      if (this.vars['flashplayer'] || !this.isMsie()) {
        this.html5Video = false;
        return
      }
      if (this.isMobile()) {
        mobile = true
      }
      for (var i = 0; i < va.length; i++) {
        var v = va[i];
        if (v) {
          if (v[1] != '' && !mobile && supportType(v[1], codecs(v[1])) && v[0].substr(0, 4) != 'rtmp') {
            nva.push(v)
          }
          if ((this.getFileExt(v[0]) == '.m3u8' || this.vars['type'] == 'video/m3u8' || this.vars['type'] == 'm3u8' || v[1] == 'video/m3u8' || v[1] == 'm3u8') && this.vars['html5m3u8']) {
            this.isM3u8 = true;
            nva.push(v)
          }
        }
      }
      if (nva.length > 0) {
        this.VA = nva
      } else {
        if (!mobile) {
          this.html5Video = false
        }
      }
    },
    getVideo: function () {
      if (this.V) {
        this.changeVideo();
        return
      }
      if (this.vars['cktrack']) {
        this.loadTrack()
      }
      if (this.supportVideo() && !this.vars['flashplayer']) {
        this.getHtml5Video()
      }
      var thisTemp = this;
      var v = this.vars;
      var src = '',
      source = '',
      poster = '',
      loop = '',
      autoplay = '',
      track = '';
      var video = v['video'];
      var i = 0;
      this.CD = this.getByElement(v['container']);
      volume = v['volume'];
      if (!this.CD) {
        this.eject(this.errorList[6], v['container']);
        return false
      }
      var playerID = 'ckplayer' + this.randomString();
      var playerDiv = document.createElement('div');
      playerDiv.className = playerID;
      this.V = undefined;
      this.CD.innerHTML = '';
      this.CD.appendChild(playerDiv);
      this.PD = this.getByElement(playerID);
      this.css(this.CD, {
        backgroundColor: '#000000',
        overflow: 'hidden',
        position: 'relative'
      });
      this.css(this.PD, {
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
        fontFamily: this.fontFamily
      });
      if (this.html5Video) {
        this.PD.onselectstart = this.PD.ondrag = function () {
          return false
        };
        if (this.VA.length == 1) {
          src = ' src="' + decodeURIComponent(this.VA[0][0]) + '"'
        } else {
          var videoArr = this.VA.slice(0);
          videoArr = this.arrSort(videoArr);
          for (i = 0; i < videoArr.length; i++) {
            var type = '';
            var va = videoArr[i];
            if (va[1]) {
              type = ' type="' + va[1] + '"';
              if (type == ' type="video/m3u8"' || type == ' type="m3u8"') {
                type = ''
              }
            }
            source += '<source src="' + decodeURIComponent(va[0]) + '"' + type + '>'
          }
        }
        if (v['autoplay']) {
          autoplay = ' autoplay="autoplay"'
        }
        if (v['poster']) {
          poster = ' poster="' + v['poster'] + '"'
        }
        if (v['loop']) {
          loop = ' loop="loop"'
        }
        if (v['seek'] > 0) {
          this.needSeek = v['seek']
        }
        if (v['track'] != null && v['cktrack'] == null) {
          var trackArr = v['track'];
          var trackDefault = '';
          var defaultHave = false;
          for (i = 0; i < trackArr.length; i++) {
            var trackObj = trackArr[i];
            if (trackObj['default'] && !defaultHave) {
              trackDefault = ' default';
              defaultHave = true
            } else {
              trackDefault = ''
            }
            track += '<track kind="' + trackObj['kind'] + '" src="' + trackObj['src'] + '" srclang="' + trackObj['srclang'] + '" label="' + trackObj['label'] + '"' + trackDefault + '>'
          }
        }
        var autoLoad = this.ckplayerConfig['config']['autoLoad'];
        var preload = '';
        if (!autoLoad) {
          preload = ' preload="meta"'
        }
        var vid = this.randomString();
        var controls = '';
        if (!this.showFace) {
          controls = ' controls="controls"'
        }
        var html = '';
        if (!this.isM3u8) {
          html = '<video id="' + vid + '"' + src + ' width="100%" height="100%"' + autoplay + poster + loop + preload + controls + ' x5-playsinline="" playsinline="" webkit-playsinline="true">' + source + track + '</video>'
        } else {
          html = '<video id="' + vid + '" width="100%" height="100%"' + poster + loop + preload + controls + ' x5-playsinline="" playsinline="" webkit-playsinline="true">' + track + '</video>'
        }
        this.PD.innerHTML = html;
        this.V = this.getByElement('#' + vid);
        if (this.vars['crossorigin']) {
          this.V.crossOrigin = this.vars['crossorigin']
        }
        try {
          this.V.volume = volume;
          if (this.playbackRateArr && this.vars['playbackrate'] > - 1) {
            if (this.vars['playbackrate'] < this.playbackRateArr.length) {
              this.playbackRateDefault = this.vars['playbackrate']
            }
            this.V.playbackRate = this.playbackRateArr[this.playbackRateDefault][0]
          }
        } catch (error) {
        }
        this.css(this.V, {
          width: '100%',
          height: '100%'
        });
        if (this.isM3u8) {
          var loadJsHandler = function () {
            thisTemp.embedHls(thisTemp.VA[0][0], v['autoplay'])
          };
          this.loadJs(javascriptPath + 'hls/hls.min.js', loadJsHandler)
        }
        this.css(this.V, 'backgroundColor', '#000000');
        if (this.config['videoDrawImage']) {
          var canvasID = 'vcanvas' + this.randomString();
          var canvasDiv = document.createElement('div');
          canvasDiv.className = canvasID;
          this.PD.appendChild(canvasDiv);
          this.MD = this.getByElement(canvasID);
          this.css(this.MD, {
            backgroundColor: '#000000',
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            cursor: 'pointer',
            left: '0px',
            top: '0px',
            zIndex: '10'
          });
          var cvid = 'ccanvas' + this.randomString();
          this.MD.innerHTML = this.newCanvas(cvid, this.PD.offsetWidth, this.PD.offsetHeight);
          this.MDC = this.getByElement(cvid + '-canvas');
          this.MDCX = this.MDC.getContext('2d')
        }
        this.playerType = 'html5video';
        this.addVEvent();
        if (this.showFace) {
          this.definition();
          if (!this.vars['live'] && this.playbackRateArr && this.vars['playbackrate'] > - 1) {
            this.playbackRate()
          }
          if (v['autoplay']) {
            this.loadingStart(true)
          }
        }
        this.playerLoad()
      } else {
        this.embedSWF()
      }
    },
    playerLoad: function () {
      var thisTemp = this;
      if (this.isFirst) {
        this.isFirst = false;
        window.setTimeout(function () {
          thisTemp.loadedHandler()
        }, 1)
      }
    },
    addVEvent: function () {
      var thisTemp = this;
      var eventVideoClick = function (event) {
        thisTemp.videoClick()
      };
      this.addListenerInside('click', eventVideoClick);
      this.addListenerInside('click', eventVideoClick, this.MDC);
      this.timerErrorFun();
      var eventJudgeIsLive = function (event) {
        thisTemp.sendJS('loadedmetadata');
        thisTemp.sendJS('duration', thisTemp.V.duration);
        thisTemp.judgeIsLive()
      };
      this.addListenerInside('loadedmetadata', eventJudgeIsLive);
      var eventPlaying = function (event) {
        thisTemp.playingHandler();
        thisTemp.sendJS('play');
        thisTemp.sendJS('paused', false)
      };
      this.addListenerInside('playing', eventPlaying);
      var eventPause = function (event) {
        thisTemp.pauseHandler();
        thisTemp.sendJS('pause');
        thisTemp.sendJS('paused', true)
      };
      this.addListenerInside('pause', eventPause);
      var eventTimeupdate = function (event) {
        if (thisTemp.timerLoading != null) {
          thisTemp.loadingStart(false)
        }
        if (thisTemp.time) {
          thisTemp.sendJS('time', thisTemp.time)
        }
      };
      this.addListenerInside('timeupdate', eventTimeupdate);
      var eventWaiting = function (event) {
        thisTemp.loadingStart(true)
      };
      this.addListenerInside('waiting', eventWaiting);
      var eventSeeking = function (event) {
        thisTemp.sendJS('seek', 'start')
      };
      this.addListenerInside('seeking', eventSeeking);
      var eventSeeked = function (event) {
        thisTemp.seekedHandler();
        thisTemp.sendJS('seek', 'ended')
      };
      this.addListenerInside('seeked', eventSeeked);
      var eventEnded = function (event) {
        thisTemp.endedHandler();
        thisTemp.sendJS('ended')
      };
      this.addListenerInside('ended', eventEnded);
      var eventVolumeChange = function (event) {
        try {
          thisTemp.volumechangeHandler();
          thisTemp.sendJS('volume', thisTemp.volume || thisTemp.V.volume)
        } catch (event) {
        }
      };
      this.addListenerInside('volumechange', eventVolumeChange);
      var eventFullChange = function (event) {
        var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        thisTemp.sendJS('full', fullState)
      };
      this.addListenerInside('fullscreenchange', eventFullChange);
      this.addListenerInside('webkitfullscreenchange', eventFullChange);
      this.addListenerInside('mozfullscreenchange', eventFullChange);
      if (this.showFace) {
        this.interFace()
      }
    },
    resetPlayer: function () {
      this.timeTextHandler();
      if (this.showFace) {
        this.timeProgress(0, 1);
        this.changeLoad(0);
        this.initPlayPause();
        this.definition();
        this.showFrontNext();
        this.deletePrompt();
        this.deletePreview();
        this.trackHide();
        this.resetTrack();
        this.trackElement = [
        ];
        this.track = [
        ]
      }
    },
    interFace: function () {
      this.showFace = true;
      var thisTemp = this;
      var html = '';
      var i = 0;
      var bWidth = 38,
      bHeight = 38;
      var bBgColor = '#FFFFFF',
      bOverColor = '#0782F5';
      var timeInto = this.formatTime(0) + ' / ' + this.formatTime(this.vars['duration']);
      var randomS = this.randomString(10);
      var controlBarBgID = 'controlbgbar' + randomS,
      controlBarID = 'controlbar' + randomS,
      timeProgressBgID = 'timeprogressbg' + randomS,
      loadProgressID = 'loadprogress' + randomS,
      timeProgressID = 'timeprogress' + randomS,
      timeBOBGID = 'timebobg' + randomS,
      timeBOID = 'timebo' + randomS,
      timeBWID = 'timebw' + randomS,
      timeTextID = 'timetext' + randomS,
      playID = 'play' + randomS,
      pauseID = 'pause' + randomS,
      frontID = 'front' + randomS,
      nextID = 'next' + randomS,
      fullID = 'full' + randomS,
      escFullID = 'escfull' + randomS,
      muteID = 'mute' + randomS,
      escMuteID = 'escmute' + randomS,
      volumeID = 'volume' + randomS,
      volumeDbgID = 'volumedbg' + randomS,
      volumeBgID = 'volumebg' + randomS,
      volumeUpID = 'volumeup' + randomS,
      volumeBOID = 'volumebo' + randomS,
      volumeBWID = 'volumebw' + randomS,
      definitionID = 'definition' + randomS,
      definitionPID = 'definitionp' + randomS,
      playbackRateID = 'playbackrate' + randomS,
      playbackRatePID = 'playbackratep' + randomS,
      promptBgID = 'promptbg' + randomS,
      promptID = 'prompt' + randomS,
      dlineID = 'dline' + randomS,
      menuID = 'menu' + randomS,
      pauseCenterID = 'pausecenter' + randomS,
      loadingID = 'loading' + randomS,
      errorTextID = 'errortext' + randomS,
      logoID = 'logo' + randomS;
      var controlBarBg = document.createElement('div'),
      controlBar = document.createElement('div'),
      timeProgressBg = document.createElement('div'),
      timeBoBg = document.createElement('div'),
      pauseCenter = document.createElement('div'),
      errorText = document.createElement('div'),
      promptBg = document.createElement('div'),
      prompt = document.createElement('div'),
      menuDiv = document.createElement('div'),
      definitionP = document.createElement('div'),
      playbackrateP = document.createElement('div'),
      loading = document.createElement('div'),
      logo = document.createElement('div');
      controlBarBg.className = controlBarBgID;
      controlBar.className = controlBarID;
      timeProgressBg.className = timeProgressBgID;
      timeBoBg.className = timeBOBGID;
      promptBg.className = promptBgID;
      prompt.className = promptID;
      menuDiv.className = menuID;
      definitionP.className = definitionPID;
      playbackrateP.className = playbackRatePID;
      pauseCenter.className = pauseCenterID;
      loading.className = loadingID;
      logo.className = logoID;
      errorText.className = errorTextID;
      this.PD.appendChild(controlBarBg);
      this.PD.appendChild(controlBar);
      this.PD.appendChild(timeProgressBg);
      this.PD.appendChild(timeBoBg);
      this.PD.appendChild(promptBg);
      this.PD.appendChild(prompt);
      this.PD.appendChild(definitionP);
      this.PD.appendChild(playbackrateP);
      this.PD.appendChild(pauseCenter);
      this.PD.appendChild(loading);
      this.PD.appendChild(errorText);
      this.PD.appendChild(logo);
      this.body.appendChild(menuDiv);
      if (this.vars['live']) {
        timeInto = this.getNowDate()
      }
      html += '<div class="' + playID + '" data-title="' + thisTemp.language['play'] + '">' + this.newCanvas(playID, bWidth, bHeight) + '</div>';
      html += '<div class="' + pauseID + '" data-title="' + thisTemp.language['pause'] + '">' + this.newCanvas(pauseID, bWidth, bHeight) + '</div>';
      html += '<div class="' + dlineID + '-la"></div>';
      html += '<div class="' + frontID + '" data-title="' + thisTemp.language['front'] + '">' + this.newCanvas(frontID, bWidth, bHeight) + '</div>';
      html += '<div class="' + dlineID + '-lb"></div>';
      html += '<div class="' + nextID + '" data-title="' + thisTemp.language['next'] + '">' + this.newCanvas(nextID, bWidth, bHeight) + '</div>';
      html += '<div class="' + dlineID + '-lc"></div>';
      html += '<div class="' + timeTextID + '">' + timeInto + '</div>';
      html += '<div class="' + fullID + '" data-title="' + thisTemp.language['full'] + '">' + this.newCanvas(fullID, bWidth, bHeight) + '</div>';
      html += '<div class="' + escFullID + '" data-title="' + thisTemp.language['escFull'] + '">' + this.newCanvas(escFullID, bWidth, bHeight) + '</div>';
      html += '<div class="' + dlineID + '-ra"></div>';
      html += '<div class="' + definitionID + '" data-title="' + thisTemp.language['definition'] + '"></div>';
      html += '<div class="' + dlineID + '-rb"></div>';
      html += '<div class="' + playbackRateID + '" data-title="' + thisTemp.language['playbackRate'] + '"></div>';
      html += '<div class="' + dlineID + '-rc"></div>';
      html += '<div class="' + volumeID + '"><div class="' + volumeDbgID + '"><div class="' + volumeBgID + '"><div class="' + volumeUpID + '"></div></div><div class="' + volumeBOID + '"><div class="' + volumeBWID + '"></div></div></div></div>';
      html += '<div class="' + muteID + '" data-title="' + thisTemp.language['mute'] + '">' + this.newCanvas(muteID, bWidth, bHeight) + '</div>';
      html += '<div class="' + escMuteID + '" data-title="' + thisTemp.language['escMute'] + '">' + this.newCanvas(escMuteID, bWidth, bHeight) + '</div>';
      html += '<div class="' + dlineID + '-rd"></div>';
      this.getByElement(controlBarID).innerHTML = html;
      this.getByElement(timeProgressBgID).innerHTML = '<div class="' + loadProgressID + '"></div><div class="' + timeProgressID + '"></div>';
      this.getByElement(timeBOBGID).innerHTML = '<div class="' + timeBOID + '"><div class="' + timeBWID + '"></div></div>';
      this.getByElement(pauseCenterID).innerHTML = this.newCanvas(pauseCenterID, 80, 80);
      this.getByElement(loadingID).innerHTML = this.newCanvas(loadingID, 60, 60);
      this.getByElement(errorTextID).innerHTML = this.language['error'];
      if (this.ckplayerConfig['style']['logo']) {
        if (this.ckplayerConfig['style']['logo']['file']) {
          var logoFile = this.ckplayerConfig['style']['logo']['file'];
          if (logoFile.substr(0, 15) == 'data:image/png;' || logoFile.substr(0, 15) == 'data:image/jpg;' || logoFile.substr(0, 15) == 'data:image/jpeg;') {
            this.getByElement(logoID).innerHTML = '<img src="' + logoFile + '" border="0">'
          }
        }
      } else {
        this.getByElement(logoID).innerHTML = this.vars['logo'] || this.logo || ''
      }
      var pd = this.PD;
      this.CB = {
        controlBarBg: this.getByElement(controlBarBgID, pd),
        controlBar: this.getByElement(controlBarID, pd),
        promptBg: this.getByElement(promptBgID, pd),
        prompt: this.getByElement(promptID, pd),
        timeProgressBg: this.getByElement(timeProgressBgID, pd),
        loadProgress: this.getByElement(loadProgressID, pd),
        timeProgress: this.getByElement(timeProgressID, pd),
        timeBoBg: this.getByElement(timeBOBGID, pd),
        timeButton: this.getByElement(timeBOID, pd),
        timeText: this.getByElement(timeTextID, pd),
        play: this.getByElement(playID, pd),
        front: this.getByElement(frontID, pd),
        next: this.getByElement(nextID, pd),
        pause: this.getByElement(pauseID, pd),
        definition: this.getByElement(definitionID, pd),
        definitionP: this.getByElement(definitionPID, pd),
        definitionLine: this.getByElement(dlineID + '-rb', pd),
        playbackrate: this.getByElement(playbackRateID, pd),
        playbackrateP: this.getByElement(playbackRatePID, pd),
        playbackrateLine: this.getByElement(dlineID + '-rc', pd),
        full: this.getByElement(fullID, pd),
        escFull: this.getByElement(escFullID, pd),
        mute: this.getByElement(muteID, pd),
        escMute: this.getByElement(escMuteID, pd),
        volume: this.getByElement(volumeID, pd),
        volumeBg: this.getByElement(volumeBgID, pd),
        volumeUp: this.getByElement(volumeUpID, pd),
        volumeBO: this.getByElement(volumeBOID, pd),
        pauseCenter: this.getByElement(pauseCenterID, pd),
        menu: this.getByElement(menuID),
        loading: this.getByElement(loadingID, pd),
        loadingCanvas: this.getByElement(loadingID + '-canvas', pd),
        errorText: this.getByElement(errorTextID, pd),
        logo: this.getByElement(logoID, pd),
        playLine: this.getByElement(dlineID + '-la', pd),
        frontLine: this.getByElement(dlineID + '-lb', pd),
        nextLine: this.getByElement(dlineID + '-lc', pd),
        fullLine: this.getByElement(dlineID + '-ra'),
        definitionLine: this.getByElement(dlineID + '-rb', pd),
        muteLine: this.getByElement(dlineID + '-rd', pd)
      };
      this.buttonWidth = {
        play: bWidth,
        full: bWidth,
        front: bWidth,
        next: bWidth,
        mute: bWidth
      };
      this.css(controlBarBgID, {
        width: '100%',
        height: bHeight + 'px',
        backgroundColor: '#000000',
        position: 'absolute',
        bottom: '0px',
        filter: 'alpha(opacity:0.8)',
        opacity: '0.8',
        zIndex: '90'
      });
      this.css(controlBarID, {
        width: '100%',
        height: bHeight + 'px',
        position: 'absolute',
        bottom: '0px',
        zIndex: '90'
      });
      this.css(pauseCenterID, {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        position: 'absolute',
        display: 'none',
        cursor: 'pointer',
        zIndex: '100'
      });
      this.css(loadingID, {
        width: '60px',
        height: '60px',
        position: 'absolute',
        display: 'none',
        zIndex: '100'
      });
      this.css(errorTextID, {
        width: '120px',
        height: '30px',
        lineHeight: '30px',
        color: '#FFFFFF',
        fontSize: '14px',
        textAlign: 'center',
        position: 'absolute',
        display: 'none',
        zIndex: '101',
        cursor: 'default',
        zIndex: '100'
      });
      this.css(logoID, {
        height: '30px',
        lineHeight: '30px',
        color: '#FFFFFF',
        fontFamily: 'Arial',
        fontSize: '28px',
        textAlign: 'center',
        position: 'absolute',
        float: 'left',
        left: '-1000px',
        top: '20px',
        zIndex: '100',
        filter: 'alpha(opacity:0.8)',
        opacity: '0.8',
        cursor: 'default'
      });
      this.css(this.CB['loadingCanvas'], {
        transform: 'rotate(0deg)',
        msTransform: 'rotate(0deg)',
        mozTransform: 'rotate(0deg)',
        webkitTransform: 'rotate(0deg)',
        oTransform: 'rotate(0deg)'
      });
      this.css([promptBgID,
      promptID], {
        height: '30px',
        lineHeight: '30px',
        color: '#FFFFFF',
        fontSize: '14px',
        textAlign: 'center',
        position: 'absolute',
        borderRadius: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
        bottom: '0px',
        display: 'none',
        zIndex: '95'
      });
      this.css(promptBgID, {
        backgroundColor: '#000000',
        filter: 'alpha(opacity:0.5)',
        opacity: '0.5'
      });
      this.css(timeProgressBgID, {
        width: '100%',
        height: '6px',
        backgroundColor: '#3F3F3F',
        overflow: 'hidden',
        position: 'absolute',
        bottom: '38px',
        zIndex: '88'
      });
      this.css([loadProgressID,
      timeProgressID], {
        width: '1px',
        height: '6px',
        position: 'absolute',
        bottom: '38px',
        top: '0px',
        zIndex: '91'
      });
      this.css(loadProgressID, 'backgroundColor', '#6F6F6F');
      this.css(timeProgressID, 'backgroundColor', bOverColor);
      this.css(timeBOBGID, {
        width: '100%',
        height: '14px',
        overflow: 'hidden',
        position: 'absolute',
        bottom: '34px',
        cursor: 'pointer',
        zIndex: '92'
      });
      this.css(timeBOID, {
        width: '14px',
        height: '14px',
        overflow: 'hidden',
        borderRadius: '50%',
        backgroundColor: bBgColor,
        cursor: 'pointer',
        position: 'absolute',
        top: '0px',
        zIndex: '20'
      });
      this.css(timeBWID, {
        width: '8px',
        height: '8px',
        overflow: 'hidden',
        borderRadius: '50%',
        position: 'absolute',
        backgroundColor: bOverColor,
        left: '3px',
        top: '3px'
      });
      this.css(timeTextID, {
        lineHeight: bHeight + 'px',
        color: '#FFFFFF',
        fontFamily: 'arial',
        fontSize: '16px',
        paddingLeft: '10px',
        float: 'left',
        overflow: 'hidden',
        cursor: 'default'
      });
      this.css([dlineID + '-la',
      dlineID + '-lb',
      dlineID + '-lc',
      dlineID + '-ra',
      dlineID + '-rb',
      dlineID + '-rc',
      dlineID + '-rd'], {
        width: '0px',
        height: bHeight + 'px',
        overflow: 'hidden',
        borderLeft: '1px solid #303030',
        borderRight: '1px solid #151515',
        filter: 'alpha(opacity:0.9)',
        opacity: '0.9'
      });
      this.css([dlineID + '-la',
      dlineID + '-lb',
      dlineID + '-lc'], 'float', 'left');
      this.css([dlineID + '-ra',
      dlineID + '-rb',
      dlineID + '-rc',
      dlineID + '-rd'], 'float', 'right');
      this.css([dlineID + '-lb',
      dlineID + '-lc',
      dlineID + '-rb',
      dlineID + '-rc'], 'display', 'none');
      this.css([playID,
      pauseID,
      frontID,
      nextID], {
        width: bWidth + 'px',
        height: bHeight + 'px',
        float: 'left',
        overflow: 'hidden',
        cursor: 'pointer'
      });
      this.css([frontID,
      nextID], 'display', 'none');
      this.initPlayPause();
      this.css([muteID,
      escMuteID], {
        width: bWidth + 'px',
        height: bHeight + 'px',
        float: 'right',
        overflow: 'hidden',
        cursor: 'pointer'
      });
      if (this.vars['volume'] > 0) {
        this.css(escMuteID, 'display', 'none')
      } else {
        this.css(muteID, 'display', 'none')
      }
      this.css([volumeID,
      volumeDbgID], {
        width: '110px',
        height: bHeight + 'px',
        overflow: 'hidden',
        float: 'right'
      });
      this.css(volumeDbgID, {
        position: 'absolute'
      });
      this.css([volumeBgID,
      volumeUpID], {
        width: '100px',
        height: '6px',
        overflow: 'hidden',
        borderRadius: '5px',
        cursor: 'pointer'
      });
      this.css(volumeBgID, {
        position: 'absolute',
        top: '16px'
      });
      this.css(volumeBgID, 'backgroundColor', '#666666');
      this.css(volumeUpID, 'backgroundColor', bOverColor);
      this.buttonWidth['volume'] = 100;
      this.css(volumeBOID, {
        width: '12px',
        height: '12px',
        overflow: 'hidden',
        borderRadius: '50%',
        position: 'absolute',
        backgroundColor: bBgColor,
        top: '13px',
        left: '0px',
        cursor: 'pointer'
      });
      this.css(volumeBWID, {
        width: '6px',
        height: '6px',
        overflow: 'hidden',
        borderRadius: '50%',
        position: 'absolute',
        backgroundColor: bOverColor,
        left: '3px',
        top: '3px'
      });
      this.css(definitionID, {
        lineHeight: bHeight + 'px',
        color: '#FFFFFF',
        float: 'right',
        fontSize: '14px',
        textAlign: 'center',
        overflow: 'hidden',
        display: 'none',
        cursor: 'pointer'
      });
      this.css(definitionPID, {
        lineHeight: (bHeight - 8) + 'px',
        color: '#FFFFFF',
        overflow: 'hidden',
        position: 'absolute',
        bottom: '4px',
        backgroundColor: '#000000',
        textAlign: 'center',
        zIndex: '95',
        cursor: 'pointer',
        display: 'none'
      });
      this.css(playbackRateID, {
        lineHeight: bHeight + 'px',
        color: '#FFFFFF',
        float: 'right',
        fontSize: '14px',
        textAlign: 'center',
        overflow: 'hidden',
        display: 'none',
        cursor: 'pointer'
      });
      this.css(playbackRatePID, {
        lineHeight: (bHeight - 8) + 'px',
        color: '#FFFFFF',
        overflow: 'hidden',
        position: 'absolute',
        bottom: '4px',
        backgroundColor: '#000000',
        textAlign: 'center',
        zIndex: '95',
        cursor: 'pointer',
        display: 'none'
      });
      this.css([fullID,
      escFullID], {
        width: bWidth + 'px',
        height: bHeight + 'px',
        float: 'right',
        overflow: 'hidden',
        cursor: 'pointer'
      });
      this.css(escFullID, 'display', 'none');
      var cPlay = this.getByElement(playID + '-canvas').getContext('2d');
      var cPlayFillRect = function () {
        thisTemp.canvasFill(cPlay, [
          [12,
          10],
          [
            29,
            19
          ],
          [
            12,
            28
          ]
        ])
      };
      cPlay.fillStyle = bBgColor;
      cPlayFillRect();
      var cPlayOver = function (event) {
        cPlay.clearRect(0, 0, bWidth, bHeight);
        cPlay.fillStyle = bOverColor;
        cPlayFillRect()
      };
      var cPlayOut = function (event) {
        cPlay.clearRect(0, 0, bWidth, bHeight);
        cPlay.fillStyle = bBgColor;
        cPlayFillRect()
      };
      this.addListenerInside('mouseover', cPlayOver, this.getByElement(playID + '-canvas'));
      this.addListenerInside('mouseout', cPlayOut, this.getByElement(playID + '-canvas'));
      var cPause = this.getByElement(pauseID + '-canvas').getContext('2d');
      var cPauseFillRect = function () {
        thisTemp.canvasFillRect(cPause, [
          [10,
          10,
          5,
          18],
          [
            22,
            10,
            5,
            18
          ]
        ])
      };
      cPause.fillStyle = bBgColor;
      cPauseFillRect();
      var cPauseOver = function (event) {
        cPause.clearRect(0, 0, bWidth, bHeight);
        cPause.fillStyle = bOverColor;
        cPauseFillRect()
      };
      var cPauseOut = function (event) {
        cPause.clearRect(0, 0, bWidth, bHeight);
        cPause.fillStyle = bBgColor;
        cPauseFillRect()
      };
      this.addListenerInside('mouseover', cPauseOver, this.getByElement(pauseID + '-canvas'));
      this.addListenerInside('mouseout', cPauseOut, this.getByElement(pauseID + '-canvas'));
      var cFront = this.getByElement(frontID + '-canvas').getContext('2d');
      var cFrontFillRect = function () {
        thisTemp.canvasFill(cFront, [
          [16,
          19],
          [
            30,
            10
          ],
          [
            30,
            28
          ]
        ]);
        thisTemp.canvasFillRect(cFront, [
          [8,
          10,
          5,
          18]
        ])
      };
      cFront.fillStyle = bBgColor;
      cFrontFillRect();
      var cFrontOver = function (event) {
        cFront.clearRect(0, 0, bWidth, bHeight);
        cFront.fillStyle = bOverColor;
        cFrontFillRect()
      };
      var cFrontOut = function (event) {
        cFront.clearRect(0, 0, bWidth, bHeight);
        cFront.fillStyle = bBgColor;
        cFrontFillRect()
      };
      this.addListenerInside('mouseover', cFrontOver, this.getByElement(frontID + '-canvas'));
      this.addListenerInside('mouseout', cFrontOut, this.getByElement(frontID + '-canvas'));
      var cNext = this.getByElement(nextID + '-canvas').getContext('2d');
      var cNextFillRect = function () {
        thisTemp.canvasFill(cNext, [
          [8,
          10],
          [
            22,
            19
          ],
          [
            8,
            28
          ]
        ]);
        thisTemp.canvasFillRect(cNext, [
          [25,
          10,
          5,
          18]
        ])
      };
      cNext.fillStyle = bBgColor;
      cNextFillRect();
      var cNextOver = function (event) {
        cNext.clearRect(0, 0, bWidth, bHeight);
        cNext.fillStyle = bOverColor;
        cNextFillRect()
      };
      var cNextOut = function (event) {
        cNext.clearRect(0, 0, bWidth, bHeight);
        cNext.fillStyle = bBgColor;
        cNextFillRect()
      };
      this.addListenerInside('mouseover', cNextOver, this.getByElement(nextID + '-canvas'));
      this.addListenerInside('mouseout', cNextOut, this.getByElement(nextID + '-canvas'));
      var cFull = this.getByElement(fullID + '-canvas').getContext('2d');
      var cFullFillRect = function () {
        thisTemp.canvasFillRect(cFull, [
          [19,
          10,
          9,
          3],
          [
            25,
            13,
            3,
            6
          ],
          [
            10,
            19,
            3,
            9
          ],
          [
            13,
            25,
            6,
            3
          ]
        ])
      };
      cFull.fillStyle = bBgColor;
      cFullFillRect();
      var cFullOver = function () {
        cFull.clearRect(0, 0, bWidth, bHeight);
        cFull.fillStyle = bOverColor;
        cFullFillRect()
      };
      var cFullOut = function () {
        cFull.clearRect(0, 0, bWidth, bHeight);
        cFull.fillStyle = bBgColor;
        cFullFillRect()
      };
      this.addListenerInside('mouseover', cFullOver, this.getByElement(fullID + '-canvas'));
      this.addListenerInside('mouseout', cFullOut, this.getByElement(fullID + '-canvas'));
      var cEscFull = this.getByElement(escFullID + '-canvas').getContext('2d');
      var cEscFullFillRect = function () {
        thisTemp.canvasFillRect(cEscFull, [
          [20,
          9,
          3,
          9],
          [
            23,
            15,
            6,
            3
          ],
          [
            9,
            20,
            9,
            3
          ],
          [
            15,
            23,
            3,
            6
          ]
        ])
      };
      cEscFull.fillStyle = bBgColor;
      cEscFullFillRect();
      var cEscFullOver = function () {
        cEscFull.clearRect(0, 0, bWidth, bHeight);
        cEscFull.fillStyle = bOverColor;
        cEscFullFillRect()
      };
      var cEscFullOut = function () {
        cEscFull.clearRect(0, 0, bWidth, bHeight);
        cEscFull.fillStyle = bBgColor;
        cEscFullFillRect()
      };
      this.addListenerInside('mouseover', cEscFullOver, this.getByElement(escFullID + '-canvas'));
      this.addListenerInside('mouseout', cEscFullOut, this.getByElement(escFullID + '-canvas'));
      var cMute = this.getByElement(muteID + '-canvas').getContext('2d');
      var cMuteFillRect = function () {
        thisTemp.canvasFill(cMute, [
          [10,
          15],
          [
            15,
            15
          ],
          [
            21,
            10
          ],
          [
            21,
            28
          ],
          [
            15,
            23
          ],
          [
            10,
            23
          ]
        ]);
        thisTemp.canvasFillRect(cMute, [
          [23,
          15,
          2,
          8],
          [
            27,
            10,
            2,
            18
          ]
        ])
      };
      cMute.fillStyle = bBgColor;
      cMuteFillRect();
      var cMuteOver = function () {
        cMute.clearRect(0, 0, bWidth, bHeight);
        cMute.fillStyle = bOverColor;
        cMuteFillRect()
      };
      var cMuteOut = function () {
        cMute.clearRect(0, 0, bWidth, bHeight);
        cMute.fillStyle = bBgColor;
        cMuteFillRect()
      };
      this.addListenerInside('mouseover', cMuteOver, this.getByElement(muteID + '-canvas'));
      this.addListenerInside('mouseout', cMuteOut, this.getByElement(muteID + '-canvas'));
      var cEscMute = this.getByElement(escMuteID + '-canvas').getContext('2d');
      var cEscMuteFillRect = function () {
        thisTemp.canvasFill(cEscMute, [
          [10,
          15],
          [
            15,
            15
          ],
          [
            21,
            10
          ],
          [
            21,
            28
          ],
          [
            15,
            23
          ],
          [
            10,
            23
          ]
        ]);
        thisTemp.canvasFill(cEscMute, [
          [23,
          13],
          [
            24,
            13
          ],
          [
            33,
            25
          ],
          [
            32,
            25
          ]
        ]);
        thisTemp.canvasFill(cEscMute, [
          [32,
          13],
          [
            33,
            13
          ],
          [
            24,
            25
          ],
          [
            23,
            25
          ]
        ])
      };
      cEscMute.fillStyle = bBgColor;
      cEscMuteFillRect();
      var cEscMuteOver = function () {
        cEscMute.clearRect(0, 0, bWidth, bHeight);
        cEscMute.fillStyle = bOverColor;
        cEscMuteFillRect()
      };
      var cEscMuteOut = function () {
        cEscMute.clearRect(0, 0, bWidth, bHeight);
        cEscMute.fillStyle = bBgColor;
        cEscMuteFillRect()
      };
      this.addListenerInside('mouseover', cEscMuteOver, this.getByElement(escMuteID + '-canvas'));
      this.addListenerInside('mouseout', cEscMuteOut, this.getByElement(escMuteID + '-canvas'));
      var cLoading = this.getByElement(loadingID + '-canvas').getContext('2d');
      var cLoadingFillRect = function () {
        cLoading.save();
        var grad = cLoading.createLinearGradient(0, 0, 60, 60);
        grad.addColorStop(0, bBgColor);
        var grad2 = cLoading.createLinearGradient(0, 0, 80, 60);
        grad2.addColorStop(1, bOverColor);
        var grad3 = cLoading.createLinearGradient(0, 0, 80, 60);
        grad3.addColorStop(1, '#FF9900');
        var grad4 = cLoading.createLinearGradient(0, 0, 80, 60);
        grad4.addColorStop(1, '#CC3300');
        cLoading.strokeStyle = grad;
        cLoading.lineWidth = 8;
        cLoading.beginPath();
        cLoading.arc(30, 30, 25, 0, 0.4 * Math.PI, false);
        cLoading.stroke();
        cLoading.closePath();
        cLoading.beginPath();
        cLoading.strokeStyle = grad2;
        cLoading.arc(30, 30, 25, 0.5 * Math.PI, 0.9 * Math.PI, false);
        cLoading.stroke();
        cLoading.beginPath();
        cLoading.strokeStyle = grad3;
        cLoading.arc(30, 30, 25, Math.PI, 1.4 * Math.PI, false);
        cLoading.stroke();
        cLoading.beginPath();
        cLoading.strokeStyle = grad4;
        cLoading.arc(30, 30, 25, 1.5 * Math.PI, 1.9 * Math.PI, false);
        cLoading.stroke();
        cLoading.closePath();
        cLoading.restore()
      };
      cLoading.fillStyle = bBgColor;
      cLoadingFillRect();
      var cPauseCenter = this.getByElement(pauseCenterID + '-canvas').getContext('2d');
      var cPauseCenterFillRect = function () {
        thisTemp.canvasFill(cPauseCenter, [
          [28,
          22],
          [
            59,
            38
          ],
          [
            28,
            58
          ]
        ]);
        cPauseCenter.save();
        cPauseCenter.lineWidth = 5;
        cPauseCenter.beginPath();
        cPauseCenter.arc(40, 40, 35, 0, 2 * Math.PI, false);
        cPauseCenter.stroke();
        cPauseCenter.closePath();
        cPauseCenter.restore()
      };
      cPauseCenter.fillStyle = bBgColor;
      cPauseCenter.strokeStyle = bBgColor;
      cPauseCenterFillRect();
      var cPauseCenterOver = function () {
        cPauseCenter.clearRect(0, 0, 80, 80);
        cPauseCenter.fillStyle = bOverColor;
        cPauseCenter.strokeStyle = bOverColor;
        cPauseCenterFillRect()
      };
      var cPauseCenterOut = function () {
        cPauseCenter.clearRect(0, 0, 80, 80);
        cPauseCenter.fillStyle = bBgColor;
        cPauseCenter.strokeStyle = bBgColor;
        cPauseCenterFillRect()
      };
      this.addListenerInside('mouseover', cPauseCenterOver, this.getByElement(pauseCenterID + '-canvas'));
      this.addListenerInside('mouseout', cPauseCenterOut, this.getByElement(pauseCenterID + '-canvas'));
      var volumeBOOver = function () {
        thisTemp.css(volumeBOID, 'backgroundColor', bOverColor);
        thisTemp.css(volumeBWID, 'backgroundColor', bBgColor)
      };
      var volumeBOOut = function () {
        thisTemp.css(volumeBOID, 'backgroundColor', bBgColor);
        thisTemp.css(volumeBWID, 'backgroundColor', bOverColor)
      };
      this.addListenerInside('mouseover', volumeBOOver, this.getByElement(volumeBOID));
      this.addListenerInside('mouseout', volumeBOOut, this.getByElement(volumeBOID));
      var timeBOOver = function () {
        thisTemp.css(timeBOID, 'backgroundColor', bOverColor);
        thisTemp.css(timeBWID, 'backgroundColor', bBgColor)
      };
      var timeBOOut = function () {
        thisTemp.css(timeBOID, 'backgroundColor', bBgColor);
        thisTemp.css(timeBWID, 'backgroundColor', bOverColor)
      };
      this.addListenerInside('mouseover', timeBOOver, this.getByElement(timeBOID));
      this.addListenerInside('mouseout', timeBOOut, this.getByElement(timeBOID));
      this.addButtonEvent();
      this.newMenu();
      this.controlBarHide();
      this.keypress();
      this.changeVolume(this.vars['volume']);
      this.showFrontNext();
      window.setTimeout(function () {
        thisTemp.elementCoordinate()
      }, 100);
      this.checkBarWidth();
      var resize = function () {
        thisTemp.elementCoordinate();
        thisTemp.timeUpdateHandler();
        thisTemp.changeLoad();
        thisTemp.checkBarWidth();
        thisTemp.changeElementCoor();
        thisTemp.changePrompt()
      };
      this.addListenerInside('resize', resize, window)
    },
    newCanvas: function (id, width, height) {
      return '<canvas class="' + id + '-canvas" width="' + width + '" height="' + height + '"></canvas>'
    },
    addButtonEvent: function () {
      var thisTemp = this;
      var playClick = function (event) {
        thisTemp.videoPlay();
        thisTemp.sendJS('clickEvent', 'actionScript->videoPlay')
      };
      this.addListenerInside('click', playClick, this.CB['play']);
      this.addListenerInside('click', playClick, this.CB['pauseCenter']);
      var pauseClick = function (event) {
        thisTemp.videoPause();
        thisTemp.sendJS('clickEvent', 'actionScript->videoPause')
      };
      this.addListenerInside('click', pauseClick, this.CB['pause']);
      var frontClick = function (event) {
        if (thisTemp.vars['front']) {
          eval(thisTemp.vars['front'] + '()');
          thisTemp.sendJS('clickEvent', 'actionScript->' + thisTemp.vars['front'])
        }
      };
      this.addListenerInside('click', frontClick, this.CB['front']);
      var nextClick = function (event) {
        if (thisTemp.vars['next']) {
          eval(thisTemp.vars['next'] + '()');
          thisTemp.sendJS('clickEvent', 'actionScript->' + thisTemp.vars['next'])
        }
      };
      this.addListenerInside('click', nextClick, this.CB['next']);
      var muteClick = function (event) {
        thisTemp.videoMute();
        thisTemp.sendJS('clickEvent', 'actionScript->videoMute')
      };
      this.addListenerInside('click', muteClick, this.CB['mute']);
      var escMuteClick = function (event) {
        thisTemp.videoEscMute();
        thisTemp.sendJS('clickEvent', 'actionScript->videoEscMute')
      };
      this.addListenerInside('click', escMuteClick, this.CB['escMute']);
      var fullClick = function (event) {
        thisTemp.fullScreen();
        thisTemp.sendJS('clickEvent', 'actionScript->fullScreen')
      };
      this.addListenerInside('click', fullClick, this.CB['full']);
      var escFullClick = function (event) {
        thisTemp.quitFullScreen();
        thisTemp.sendJS('clickEvent', 'actionScript->quitFullScreen')
      };
      this.addListenerInside('click', escFullClick, this.CB['escFull']);
      var promptHide = function (event) {
        thisTemp.promptShow(false)
      };
      var playOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['play'])
      };
      this.addListenerInside('mouseover', playOver, this.CB['play']);
      this.addListenerInside('mouseout', promptHide, this.CB['play']);
      var pauseOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['pause'])
      };
      this.addListenerInside('mouseover', pauseOver, this.CB['pause']);
      this.addListenerInside('mouseout', promptHide, this.CB['pause']);
      var frontOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['front'])
      };
      this.addListenerInside('mouseover', frontOver, this.CB['front']);
      this.addListenerInside('mouseout', promptHide, this.CB['front']);
      var nextOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['next'])
      };
      this.addListenerInside('mouseover', nextOver, this.CB['next']);
      this.addListenerInside('mouseout', promptHide, this.CB['next']);
      var muteOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['mute'])
      };
      this.addListenerInside('mouseover', muteOver, this.CB['mute']);
      this.addListenerInside('mouseout', promptHide, this.CB['mute']);
      var escMuteOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['escMute'])
      };
      this.addListenerInside('mouseover', escMuteOver, this.CB['escMute']);
      this.addListenerInside('mouseout', promptHide, this.CB['escMute']);
      var fullOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['full'])
      };
      this.addListenerInside('mouseover', fullOver, this.CB['full']);
      this.addListenerInside('mouseout', promptHide, this.CB['full']);
      var escFullOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['escFull'])
      };
      this.addListenerInside('mouseover', escFullOver, this.CB['escFull']);
      this.addListenerInside('mouseout', promptHide, this.CB['escFull']);
      var definitionOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['definition'])
      };
      this.addListenerInside('mouseover', definitionOver, this.CB['definition']);
      this.addListenerInside('mouseout', promptHide, this.CB['definition']);
      var playbackrateOver = function (event) {
        thisTemp.promptShow(thisTemp.CB['playbackrate'])
      };
      this.addListenerInside('mouseover', playbackrateOver, this.CB['playbackrate']);
      this.addListenerInside('mouseout', promptHide, this.CB['playbackrate']);
      var volumePrompt = function (vol) {
        var volumeBOXY = thisTemp.getCoor(thisTemp.CB['volumeBO']);
        var promptObj = {
          title: thisTemp.language['volume'] + vol + '%',
          x: volumeBOXY['x'] + thisTemp.CB['volumeBO'].offsetWidth * 0.5,
          y: volumeBOXY['y']
        };
        thisTemp.promptShow(false, promptObj)
      };
      var volumeObj = {
        slider: this.CB['volumeBO'],
        follow: this.CB['volumeUp'],
        refer: this.CB['volumeBg'],
        grossValue: 'volume',
        pd: true,
        startFun: function (vol) {
        },
        monitorFun: function (vol) {
          thisTemp.changeVolume(vol * 0.01, false, false);
          volumePrompt(vol)
        },
        endFun: function (vol) {
        },
        overFun: function (vol) {
          volumePrompt(vol)
        }
      };
      this.slider(volumeObj);
      var volumeClickObj = {
        refer: this.CB['volumeBg'],
        grossValue: 'volume',
        fun: function (vol) {
          vol *= 0.01;
          thisTemp.changeVolume(vol, true, true);
          document.cookie = `volume=${vol};`;
        }
      };
      this.progressClick(volumeClickObj);
      this.timeButtonMouseDown();
      var volumeBgMove = function (event) {
        var volumeBgXY = thisTemp.getCoor(thisTemp.CB['volumeBg']);
        var eventX = thisTemp.client(event) ['x'];
        var eventVolume = parseInt((eventX - volumeBgXY['x']) * 100 / thisTemp.CB['volumeBg'].offsetWidth);
        var buttonPromptObj = {
          title: thisTemp.language['volume'] + eventVolume + '%',
          x: eventX,
          y: volumeBgXY['y']
        };
        thisTemp.promptShow(false, buttonPromptObj)
      };
      this.addListenerInside('mousemove', volumeBgMove, this.CB['volumeBg']);
      this.addListenerInside('mouseout', promptHide, this.CB['volumeBg']);
      this.addListenerInside('mouseout', promptHide, this.CB['volumeBO']);
      this.addDefListener();
      this.addPlaybackrate()
    },
    videoClick: function () {
      var thisTemp = this;
      var clearTimerClick = function () {
        if (thisTemp.timerClick != null) {
          if (thisTemp.timerClick.runing) {
            thisTemp.timerClick.stop()
          }
          thisTemp.timerClick = null
        }
      };
      var timerClickFun = function () {
        clearTimerClick();
        thisTemp.isClick = false;
        thisTemp.playOrPause()
      };
      clearTimerClick();
      if (this.isClick) {
        this.isClick = false;
        if (thisTemp.config['videoDbClick']) {
          if (!this.full) {
            thisTemp.fullScreen()
          } else {
            thisTemp.quitFullScreen()
          }
        }
      } else {
        this.isClick = true;
        this.timerClick = new this.timer(300, timerClickFun, 1)
      }
    },
    timeButtonMouseDown: function () {
      var thisTemp = this;
      var timePrompt = function (time) {
        if (isNaN(time)) {
          time = 0
        }
        var timeButtonXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
        var promptObj = {
          title: thisTemp.formatTime(time),
          x: timeButtonXY['x'] - thisTemp.pdCoor['x'] + thisTemp.CB['timeButton'].offsetWidth * 0.5,
          y: timeButtonXY['y'] - thisTemp.pdCoor['y']
        };
        thisTemp.promptShow(false, promptObj)
      };
      var timeObj = {
        slider: this.CB['timeButton'],
        follow: this.CB['timeProgress'],
        refer: this.CB['timeBoBg'],
        grossValue: 'time',
        pd: false,
        startFun: function (time) {
          thisTemp.isTimeButtonMove = false
        },
        monitorFun: function (time) {
        },
        endFun: function (time) {
          if (thisTemp.V) {
            if (thisTemp.V.duration > 0) {
              thisTemp.needSeek = 0;
              thisTemp.videoSeek(parseInt(time))
            }
          }
        },
        overFun: function (time) {
          timePrompt(time)
        }
      };
      var timeClickObj = {
        refer: this.CB['timeBoBg'],
        grossValue: 'time',
        fun: function (time) {
          if (thisTemp.V) {
            if (thisTemp.V.duration > 0) {
              thisTemp.needSeek = 0;
              thisTemp.videoSeek(parseInt(time))
            }
          }
        }
      };
      var timeBoBgmousemove = function (event) {
        var timeBoBgXY = thisTemp.getCoor(thisTemp.CB['timeBoBg']);
        var eventX = thisTemp.client(event) ['x'];
        var eventTime = parseInt((eventX - timeBoBgXY['x']) * thisTemp.V.duration / thisTemp.CB['timeBoBg'].offsetWidth);
        var buttonPromptObj = {
          title: thisTemp.formatTime(eventTime),
          x: eventX,
          y: timeBoBgXY['y']
        };
        thisTemp.promptShow(false, buttonPromptObj);
        var def = false;
        if (!thisTemp.isUndefined(thisTemp.CB['definitionP'])) {
          if (thisTemp.css(thisTemp.CB['definitionP'], 'display') != 'block') {
            def = true
          }
        }
        if (thisTemp.vars['preview'] != null && def) {
          buttonPromptObj['time'] = eventTime;
          thisTemp.preview(buttonPromptObj)
        }
      };
      var promptHide = function (event) {
        thisTemp.promptShow(false);
        if (thisTemp.previewDiv != null) {
          thisTemp.css([thisTemp.previewDiv,
          thisTemp.previewTop], 'display', 'none')
        }
      };
      if (!this.vars['live']) {
        this.isTimeButtonDown = true;
        this.addListenerInside('mousemove', timeBoBgmousemove, this.CB['timeBoBg']);
        this.addListenerInside('mouseout', promptHide, this.CB['timeBoBg'])
      } else {
        this.isTimeButtonDown = false;
        timeObj['removeListenerInside'] = true;
        timeClickObj['removeListenerInside'] = true
      }
      this.slider(timeObj);
      this.progressClick(timeClickObj)
    },
    progressClick: function (obj) {
      var thisTemp = this;
      var referMouseClick = function (event) {
        var referX = thisTemp.client(event) ['x'] - thisTemp.getCoor(obj['refer']) ['x'];
        var rWidth = obj['refer'].offsetWidth;
        var grossValue = 0;
        if (obj['grossValue'] == 'volume') {
          grossValue = 100
        } else {
          if (thisTemp.V) {
            grossValue = thisTemp.V.duration
          }
        }
        var nowZ = parseInt(referX * grossValue / rWidth);
        if (obj['fun']) {
          if (obj['grossValue'] === 'time') {
            var sliderXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
            sliderLeft = sliderXY['x'];
            if (!thisTemp.checkSlideLeft(referX, sliderLeft, rWidth)) {
              return
            }
            var bimeButtonWB = thisTemp.CB['timeButton'].offsetWidth * 0.5;
            thisTemp.css(thisTemp.CB['timeButton'], 'left', (referX - bimeButtonWB) + 'px');
            thisTemp.css(thisTemp.CB['timeProgress'], 'width', (referX) + 'px')
          }
          obj['fun'](nowZ)
        }
      };
      if (this.isUndefined(obj['removeListenerInside'])) {
        this.addListenerInside('click', referMouseClick, obj['refer'])
      } else {
        this.removeListenerInside('click', referMouseClick, obj['refer'])
      }
    },
    slider: function (obj) {
      var thisTemp = this;
      var clientX = 0,
      criterionWidth = 0,
      sliderLeft = 0,
      referLeft = 0;
      var value = 0;
      var calculation = function () {
        var sLeft = parseInt(thisTemp.css(obj['slider'], 'left'));
        var rWidth = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
        var grossValue = 0;
        if (thisTemp.isUndefined(sLeft) || isNaN(sLeft)) {
          sLeft = 0
        }
        if (obj['grossValue'] == 'volume') {
          grossValue = 100
        } else {
          if (thisTemp.V) {
            grossValue = thisTemp.V.duration
          }
        }
        return parseInt(sLeft * grossValue / rWidth)
      };
      var mDown = function (event) {
        thisTemp.addListenerInside('mousemove', mMove, document);
        thisTemp.addListenerInside('mouseup', mUp, document);
        var referXY = thisTemp.getCoor(obj['refer']);
        var sliderXY = thisTemp.getCoor(obj['slider']);
        clientX = thisTemp.client(event) ['x'];
        referLeft = referXY['x'];
        sliderLeft = sliderXY['x'];
        criterionWidth = clientX - sliderLeft;
        if (obj['startFun']) {
          obj['startFun'](calculation())
        }
      };
      var mMove = function (event) {
        clientX = thisTemp.client(event) ['x'];
        var newX = clientX - criterionWidth - referLeft;
        if (newX < 0) {
          newX = 0
        }
        if (newX > obj['refer'].offsetWidth - obj['slider'].offsetWidth) {
          newX = obj['refer'].offsetWidth - obj['slider'].offsetWidth
        }
        if (obj['slider'] === thisTemp.CB['timeButton']) {
          if (!thisTemp.checkSlideLeft(newX, sliderLeft, obj['refer'].offsetWidth)) {
            return
          }
        }
        thisTemp.css(obj['slider'], 'left', newX + 'px');
        thisTemp.css(obj['follow'], 'width', (newX + obj['slider'].offsetWidth * 0.5) + 'px');
        var nowZ = calculation();
        if (obj['monitorFun']) {
          obj['monitorFun'](nowZ)
        }
      };
      var mUp = function (event) {
        thisTemp.removeListenerInside('mousemove', mMove, document);
        thisTemp.removeListenerInside('mouseup', mUp, document);
        if (obj['endFun']) {
          obj['endFun'](calculation())
        }
      };
      var mOver = function (event) {
        if (obj['overFun']) {
          obj['overFun'](calculation())
        }
      };
      if (this.isUndefined(obj['removeListenerInside'])) {
        this.addListenerInside('mousedown', mDown, obj['slider']);
        this.addListenerInside('mouseover', mOver, obj['slider'])
      } else {
        this.removeListenerInside('mousedown', mDown, obj['slider']);
        this.removeListenerInside('mouseover', mOver, obj['slider'])
      }
    },
    checkSlideLeft: function (newX, sliderLeft, refer) {
      var timeSA = this.ckplayerConfig['config']['timeScheduleAdjust'];
      switch (timeSA) {
        case 0:
          return false;
          break;
        case 2:
          if (newX < sliderLeft) {
            return false
          }
          break;
        case 3:
          if (newX > sliderLeft) {
            return false
          }
          break;
        case 4:
          if (!this.timeSliderLeftTemp) {
            this.timeSliderLeftTemp = sliderLeft / refer
          }
          if (newX < this.timeSliderLeftTemp * refer) {
            return false
          }
          break;
        case 5:
          if (!this.timeSliderLeftTemp) {
            this.timeSliderLeftTemp = sliderLeft / refer
          } else {
            var timeSliderMax = sliderLeft / refer;
            if (timeSliderMax > this.timeSliderLeftTemp) {
              this.timeSliderLeftTemp = timeSliderMax
            }
          }
          if (newX > this.timeSliderLeftTemp * refer) {
            return false
          }
          break;
        default:
          return true;
          break
      }
      return true
    },
    loadingStart: function (rot) {
      var thisTemp = this;
      if (this.isUndefined(rot)) {
        rot = true
      }
      if (this.showFace) {
        this.css(thisTemp.CB['loading'], 'display', 'none')
      }
      if (this.timerLoading != null) {
        if (this.timerLoading.runing) {
          this.timerLoading.stop()
        }
        this.timerLoading = null
      }
      var buffer = 0;
      var loadingFun = function () {
        var nowRotate = '0';
        try {
          nowRotate = thisTemp.css(thisTemp.CB['loadingCanvas'], 'transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-ms-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-moz-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-webkit-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-o-transform') || '0'
        } catch (event) {
        }
        nowRotate = parseInt(nowRotate.replace('rotate(', '').replace('deg);', ''));
        nowRotate += 4;
        if (nowRotate > 360) {
          nowRotate = 0
        }
        if (thisTemp.showFace) {
          thisTemp.css(thisTemp.CB['loadingCanvas'], {
            transform: 'rotate(' + nowRotate + 'deg)',
            msTransform: 'rotate(' + nowRotate + 'deg)',
            mozTransform: 'rotate(' + nowRotate + 'deg)',
            webkitTransform: 'rotate(' + nowRotate + 'deg)',
            oTransform: 'rotate(' + nowRotate + 'deg)'
          })
        }
        buffer++;
        if (buffer >= 99) {
          buffer = 99
        }
        thisTemp.sendJS('buffer', buffer)
      };
      if (rot) {
        this.timerLoading = new this.timer(10, loadingFun);
        if (this.showFace) {
          this.css(thisTemp.CB['loading'], 'display', 'block')
        }
      } else {
        thisTemp.sendJS('buffer', 100)
      }
    },
    showFrontNext: function () {
      if (!this.showFace) {
        return
      }
      if (this.vars['front']) {
        this.css([this.CB['front'],
        this.CB['frontLine']], 'display', 'block')
      } else {
        this.css([this.CB['front'],
        this.CB['frontLine']], 'display', 'none')
      }
      if (this.vars['next']) {
        this.css([this.CB['next'],
        this.CB['nextLine']], 'display', 'block')
      } else {
        this.css([this.CB['next'],
        this.CB['nextLine']], 'display', 'none')
      }
    },
    promptShow: function (ele, data) {
      if (!this.showFace) {
        return
      }
      var obj = {
      };
      if (ele || data) {
        if (!this.isUndefined(data)) {
          obj = data
        } else {
          var offsetCoor = this.getCoor(ele);
          obj = {
            title: this.getDataset(ele, 'title'),
            x: offsetCoor['x'] + ele.offsetWidth * 0.5,
            y: offsetCoor['y']
          }
        }
        this.CB['prompt'].innerHTML = obj['title'];
        this.css(this.CB['prompt'], 'display', 'block');
        var promoptWidth = this.getStringLen(obj['title']) * 10;
        this.css(this.CB['promptBg'], 'width', promoptWidth + 'px');
        this.css(this.CB['prompt'], 'width', promoptWidth + 'px');
        promoptWidth += 10;
        var x = obj['x'] - (promoptWidth * 0.5);
        var y = this.PD.offsetHeight - obj['y'] + 8;
        if (x < 0) {
          x = 0
        }
        if (x > this.PD.offsetWidth - promoptWidth) {
          x = this.PD.offsetWidth - promoptWidth
        }
        this.css([this.CB['promptBg'],
        this.CB['prompt']], {
          display: 'block',
          left: x + 'px',
          bottom: y + 'px'
        })
      } else {
        this.css([this.CB['promptBg'],
        this.CB['prompt']], {
          display: 'none'
        })
      }
    },
    timerErrorFun: function () {
      var thisTemp = this;
      this.errorSend = false;
      var clearIntervalError = function (event) {
        if (thisTemp.timerError != null) {
          if (thisTemp.timerError.runing) {
            thisTemp.timerError.stop()
          }
          thisTemp.timerError = null
        }
      };
      var errorFun = function (event) {
        clearIntervalError();
        thisTemp.error = true;
        thisTemp.errorUrl = thisTemp.getVideoUrl();
        if (!thisTemp.errorSend) {
          thisTemp.errorSend = true;
          thisTemp.sendJS('error')
        }
        if (thisTemp.showFace) {
          thisTemp.css(thisTemp.CB['errorText'], 'display', 'block');
          thisTemp.css(thisTemp.CB['pauseCenter'], 'display', 'none');
          thisTemp.css(thisTemp.CB['loading'], 'display', 'none')
        }
        thisTemp.V.removeAttribute('poster');
        thisTemp.resetPlayer()
      };
      var errorListenerFun = function (event) {
        window.setTimeout(function () {
          if (isNaN(thisTemp.V.duration)) {
            errorFun(event)
          }
        }, 500)
      };
      if (!this.errorAdd) {
        this.errorAdd = true;
        this.addListenerInside('error', errorListenerFun, this.V)
      }
      clearIntervalError();
      var timerErrorFun = function () {
        if (thisTemp.V && parseInt(thisTemp.V.networkState) == 3) {
          errorFun()
        }
      };
      this.timerError = new this.timer(this.config['errorTime'], timerErrorFun)
    },
    judgeFullScreen: function () {
      var thisTemp = this;
      if (this.timerFull != null) {
        if (this.timerFull.runing) {
          this.timerFull.stop()
        }
        this.timerFull = null
      }
      var fullFun = function () {
        thisTemp.isFullScreen()
      };
      this.timerFull = new this.timer(20, fullFun)
    },
    isFullScreen: function () {
      if (!this.showFace) {
        return
      }
      var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
      if (fullState && !this.full) {
        this.full = true;
        this.sendJS('full', true);
        this.elementCoordinate();
        this.css(this.CB['full'], 'display', 'none');
        this.css(this.CB['escFull'], 'display', 'block');
        if (this.vars['live'] == 0) {
          this.timeUpdateHandler()
        }
        this.PD.appendChild(this.CB['menu'])
      }
      if (!fullState && this.full) {
        this.full = false;
        this.sendJS('full', false);
        this.elementCoordinate();
        this.css(this.CB['full'], 'display', 'block');
        this.css(this.CB['escFull'], 'display', 'none');
        if (this.timerFull != null) {
          if (this.timerFull.runing) {
            this.timerFull.stop()
          }
          this.timerFull = null
        }
        if (this.vars['live'] == 0) {
          this.timeUpdateHandler()
        }
        this.body.appendChild(this.CB['menu'])
      }
    },
    newMenu: function () {
      var thisTemp = this;
      var i = 0;
      this.css(this.CB['menu'], {
        backgroundColor: '#FFFFFF',
        padding: '5px',
        position: 'absolute',
        left: '10px',
        top: '20px',
        display: 'none',
        zIndex: '999',
        color: '#A1A9BE',
        boxShadow: '2px 2px 3px #AAAAAA'
      });
      var mArr = this.contextMenu;
      var cMenu = this.ckplayerConfig['menu'];
      if (cMenu['name']) {
        if (cMenu['link']) {
          mArr[0] = [
            cMenu['name'],
            'link',
            cMenu['link']
          ]
        } else {
          mArr[0] = [
            cMenu['name'],
            'default'
          ]
        }
      }
      if (cMenu['version']) {
        mArr[1] = [
          cMenu['version'],
          'default',
          'line'
        ]
      }
      if (cMenu['more']) {
        if (typeof (cMenu['more']) == 'object') {
          if (cMenu['more'].length > 0) {
            var moreArr = cMenu['more'];
            for (i = 0; i < moreArr.length; i++) {
              var mTemp = moreArr[i];
              var arrTemp = [
              ];
              if (mTemp['name']) {
                arrTemp.push(mTemp['name'])
              }
              if (mTemp['clickEvent'] && mTemp['clickEvent'] != 'none') {
                var eveObj = this.clickEvent(mTemp['clickEvent']);
                arrTemp.push(eveObj['type']);
                if (eveObj['fun']) {
                  arrTemp.push(eveObj['fun'])
                }
                if (eveObj['link']) {
                  arrTemp.push(eveObj['link'])
                }
                if (eveObj['target']) {
                  arrTemp.push(' target="' + eveObj['target'] + '"')
                }
              }
              if (mTemp['separatorBefore']) {
                arrTemp.push('line')
              }
              mArr.push(arrTemp)
            }
          }
        }
      }
      var html = '';
      for (i = 0; i < mArr.length; i++) {
        var me = mArr[i];
        switch (me[1]) {
          case 'default':
            html += '<p>' + me[0] + '</p>';
            break;
          case 'link':
            html += '<p><a href="' + me[2] + '"' + me[3] + '>' + me[0] + '</a></p>';
            break;
          case 'javaScript':
            html += '<p><a href="javascript:' + me[2] + '">' + me[0] + '</a></p>';
            break;
          case 'actionScript':
            html += '<p><a href="javascript:' + this.vars['variable'] + me[2].replace('thisTemp', '') + '">' + me[0] + '</a></p>';
            break;
          default:
            break
        }
      }
      this.CB['menu'].innerHTML = html;
      var pArr = this.CB['menu'].childNodes;
      for (i = 0; i < pArr.length; i++) {
        this.css(pArr[i], {
          height: '30px',
          lineHeight: '30px',
          margin: '0px',
          fontFamily: this.fontFamily,
          fontSize: '12px',
          paddingLeft: '10px',
          paddingRight: '30px'
        });
        if (mArr[i][mArr[i].length - 1] == 'line') {
          this.css(pArr[i], 'borderBottom', '1px solid #e9e9e9')
        }
        var aArr = pArr[i].childNodes;
        for (var n = 0; n < aArr.length; n++) {
          if (aArr[n].localName == 'a') {
            this.css(aArr[n], {
              color: '#000000',
              textDecoration: 'none'
            })
          }
        }
      }
      this.PD.oncontextmenu = function (event) {
        var eve = event || window.event;
        var client = thisTemp.client(event);
        if (eve.button == 2) {
          eve.returnvalue = false;
          var x = client['x'] + thisTemp.pdCoor['x'] - 2;
          var y = client['y'] + thisTemp.pdCoor['y'] - 2;
          thisTemp.css(thisTemp.CB['menu'], {
            display: 'block',
            left: x + 'px',
            top: y + 'px'
          });
          return false
        }
        return true
      };
      var setTimeOutPClose = function () {
        if (setTimeOutP) {
          window.clearTimeout(setTimeOutP);
          setTimeOutP = null
        }
      };
      var setTimeOutP = null;
      var mouseOut = function (event) {
        setTimeOutPClose();
        setTimeOutP = window.setTimeout(function (event) {
          thisTemp.css(thisTemp.CB['menu'], 'display', 'none')
        }, 500)
      };
      this.addListenerInside('mouseout', mouseOut, thisTemp.CB['menu']);
      var mouseOver = function (event) {
        setTimeOutPClose()
      };
      this.addListenerInside('mouseover', mouseOver, thisTemp.CB['menu'])
    },
    controlBarHide: function (hide) {
      var thisTemp = this;
      var client = {
        x: 0,
        y: 0
      },
      oldClient = {
        x: 0,
        y: 0
      };
      var cShow = true,
      force = false;
      var oldCoor = [
        0,
        0
      ];
      var controlBarShow = function (show) {
        if (show && !cShow && thisTemp.controlBarIsShow) {
          cShow = true;
          thisTemp.sendJS('controlBar', true);
          thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'block');
          thisTemp.css(thisTemp.CB['controlBar'], 'display', 'block');
          thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'block');
          thisTemp.css(thisTemp.CB['timeBoBg'], 'display', 'block');
          thisTemp.changeVolume(thisTemp.volume);
          thisTemp.changeLoad();
          if (!thisTemp.timerBuffer) {
            thisTemp.bufferEdHandler()
          }
        } else {
          if (cShow) {
            cShow = false;
            var paused = thisTemp.getMetaDate() ['paused'];
            if (force) {
              paused = false
            }
            if (!paused) {
              thisTemp.sendJS('controlBar', false);
              thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'none');
              thisTemp.css(thisTemp.CB['controlBar'], 'display', 'none');
              thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'none');
              thisTemp.css(thisTemp.CB['timeBoBg'], 'display', 'none');
              thisTemp.promptShow(false)
            }
          }
        }
      };
      var cbarFun = function (event) {
        if (client['x'] == oldClient['x'] && client['y'] == oldClient['y']) {
          var cdH = parseInt(thisTemp.CD.offsetHeight);
          if ((client['y'] < cdH - 50 || client['y'] > cdH - 2) && cShow) {
            controlBarShow(false)
          }
        } else {
          if (!cShow) {
            controlBarShow(true)
          }
        }
        oldClient = {
          x: client['x'],
          y: client['y']
        }
      };
      this.timerCBar = new this.timer(2000, cbarFun);
      var cdMove = function (event) {
        var getClient = thisTemp.client(event);
        client['x'] = getClient['x'];
        client['y'] = getClient['y'];
        if (!cShow) {
          controlBarShow(true)
        }
      };
      this.addListenerInside('mousemove', cdMove, thisTemp.CD);
      this.addListenerInside('ended', cdMove);
      this.addListenerInside('resize', cdMove, window);
      if (hide === true) {
        cShow = true;
        force = true;
        controlBarShow(false)
      }
      if (hide === false) {
        cShow = false;
        force = true;
        controlBarShow(true)
      }
    },
    keypress: function () {
      var thisTemp = this;
      var keyDown = function (eve) {
        var keycode = eve.keyCode || eve.which;
        switch (keycode) {
          case 32:
            thisTemp.playOrPause();
            break;
          case 37:
            thisTemp.fastBack();
            break;
          case 39:
            thisTemp.fastNext();
            break;
          case 38:
            now = thisTemp.volume + thisTemp.ckplayerConfig['config']['volumeJump'];
            thisTemp.changeVolume(now > 1 ? 1 : now);
            break;
          case 40:
            now = thisTemp.volume - thisTemp.ckplayerConfig['config']['volumeJump'];
            thisTemp.changeVolume(now < 0 ? 0 : now);
            break;
          default:
            break
        }
      };
      this.addListenerInside('keydown', keyDown, window || document)
    },
    playbackRate: function () {
      if (!this.showFace) {
        return
      }
      var thisTemp = this;
      var vArr = this.playbackRateArr;
      var html = '';
      var nowD = '';
      var i = 0;
      if (!nowD) {
        nowD = vArr[this.playbackRateDefault][1]
      }
      if (vArr.length > 1) {
        var zlen = 0;
        for (i = 0; i < vArr.length; i++) {
          html = '<p>' + vArr[i][1] + '</p>' + html;
          var dlen = this.getStringLen(vArr[i][1]);
          if (dlen > zlen) {
            zlen = dlen
          }
        }
        if (html) {
          html += '<p>' + nowD + '</p>'
        }
        this.CB['playbackrate'].innerHTML = nowD;
        this.CB['playbackrateP'].innerHTML = html;
        this.css([this.CB['playbackrate'],
        this.CB['playbackrateLine']], 'display', 'block');
        var pArr = this.CB['playbackrateP'].childNodes;
        for (var i = 0; i < pArr.length; i++) {
          var fontColor = '#FFFFFF';
          if (pArr[i].innerHTML == nowD) {
            fontColor = '#0782F5'
          }
          this.css(pArr[i], {
            color: fontColor,
            margin: '0px',
            padding: '0px',
            fontSize: '14px'
          });
          if (i < pArr.length - 1) {
            this.css(pArr[i], 'borderBottom', '1px solid #282828')
          }
          var defClick = function (event) {
            if (nowD != this.innerHTML) {
              thisTemp.css(thisTemp.CB['playbackrateP'], 'display', 'none');
              thisTemp.newPlaybackrate(this.innerHTML);
              thisTemp.sendJS('clickEvent', 'actionScript->newPlaybackrate')
            }
          };
          this.addListenerInside('click', defClick, pArr[i])
        }
        var pW = (zlen * 10) + 20;
        this.css(this.CB['playbackrateP'], {
          width: pW + 'px'
        });
        this.css(this.CB['playbackrate'], {
          width: pW + 'px'
        });
        this.buttonWidth['playbackrate'] = this.CB['playbackrate'].offsetWidth
      } else {
        this.CB['playbackrate'].innerHTML = '';
        this.CB['playbackrateP'].innerHTML = '';
        this.css([this.CB['playbackrate'],
        this.CB['playbackrateLine']], 'display', 'none')
      }
    },
    addPlaybackrate: function () {
      var thisTemp = this;
      var setTimeOutP = null;
      var defClick = function (event) {
        /*thisTemp.css(thisTemp.CB['playbackrateP'], {
          left: thisTemp.getCoor(thisTemp.CB['playbackrate']) ['x'] + 'px',
          display: 'block'
        })*/
        var pra = thisTemp.playbackRateArr, _html = this.innerHTML;
        for (var i=0; i<pra.length; i++) {
            if (pra[i][1] == _html) {
                i = (i+1)%pra.length;
                break;
            }
        }
        var pr = pra[i][1];
        thisTemp.newPlaybackrate(pr);
        thisTemp.sendJS('clickEvent', 'actionScript->newPlaybackrate');
        document.cookie = `pr=${i};`;
      };
      this.addListenerInside('click', defClick, this.CB['playbackrate']);
      var defMouseOut = function (event) {
        if (setTimeOutP) {
          window.clearTimeout(setTimeOutP);
          setTimeOutP = null
        }
        setTimeOutP = window.setTimeout(function (event) {
          thisTemp.css(thisTemp.CB['playbackrateP'], 'display', 'none')
        }, 500)
      };
      this.addListenerInside('mouseout', defMouseOut, thisTemp.CB['playbackrateP']);
      var defMouseOver = function (event) {
        if (setTimeOutP) {
          window.clearTimeout(setTimeOutP);
          setTimeOutP = null
        }
      };
      this.addListenerInside('mouseover', defMouseOver, thisTemp.CB['playbackrateP'])
    },
    newPlaybackrate: function (title) {
      var vArr = this.playbackRateArr;
      var nVArr = [
      ];
      var i = 0;
      for (i = 0; i < vArr.length; i++) {
        var v = vArr[i];
        if (v[1] == title) {
          this.playbackRateDefault = i;
          this.V.playbackRate = v[0];
          if (this.showFace) {
            this.CB['playbackrate'].innerHTML = v[1];
            this.playbackRate()
          }
          this.sendJS('playbackRate', v)
        }
      }
    },
    definition: function () {
      if (!this.showFace) {
        return
      }
      var thisTemp = this;
      var vArr = this.VA;
      var dArr = [
      ];
      var html = '';
      var nowD = '';
      var i = 0;
      for (i = 0; i < vArr.length; i++) {
        var d = vArr[i][2];
        if (dArr.indexOf(d) == - 1) {
          dArr.push(d)
        }
        if (this.V) {
          if (vArr[i][0] == this.V.currentSrc) {
            nowD = d
          }
        }
      }
      if (!nowD) {
        nowD = dArr[0]
      }
      if (dArr.length > 1) {
        var zlen = 0;
        for (i = dArr.length - 1; i > - 1; i--) {
          html = '<p>' + dArr[i] + '</p>' + html;
          var dlen = this.getStringLen(dArr[i]);
          if (dlen > zlen) {
            zlen = dlen
          }
        }
        if (html) {
          html += '<p>' + nowD + '</p>'
        }
        this.CB['definition'].innerHTML = nowD;
        this.CB['definitionP'].innerHTML = html;
        this.css([this.CB['definition'],
        this.CB['definitionLine']], 'display', 'block');
        var pArr = this.CB['definitionP'].childNodes;
        for (var i = 0; i < pArr.length; i++) {
          var fontColor = '#FFFFFF';
          if (pArr[i].innerHTML == nowD) {
            fontColor = '#0782F5'
          }
          this.css(pArr[i], {
            color: fontColor,
            margin: '0px',
            padding: '0px',
            fontSize: '14px'
          });
          if (i < pArr.length - 1) {
            this.css(pArr[i], 'borderBottom', '1px solid #282828')
          }
          var defClick = function () {
            if (nowD != this.innerHTML) {
              thisTemp.css(thisTemp.CB['definitionP'], 'display', 'none');
              thisTemp.newDefinition(this.innerHTML)
            }
          };
          this.addListenerInside('click', defClick, pArr[i])
        }
        var pW = (zlen * 10) + 20;
        this.css(this.CB['definitionP'], {
          width: pW + 'px'
        });
        this.css(this.CB['definition'], {
          width: pW + 'px'
        });
        this.buttonWidth['definition'] = this.CB['definition'].offsetWidth
      } else {
        this.CB['definition'].innerHTML = '';
        this.CB['definitionP'].innerHTML = '';
        this.css([this.CB['definition'],
        this.CB['definitionLine']], 'display', 'none')
      }
    },
    addDefListener: function () {
      var thisTemp = this;
      var setTimeOutP = null;
      var defClick = function (event) {
        thisTemp.css(thisTemp.CB['definitionP'], {
          left: thisTemp.getCoor(thisTemp.CB['definition']) ['x'] + 'px',
          display: 'block'
        })
      };
      this.addListenerInside('click', defClick, this.CB['definition']);
      var defMouseOut = function (event) {
        if (setTimeOutP) {
          window.clearTimeout(setTimeOutP);
          setTimeOutP = null
        }
        setTimeOutP = window.setTimeout(function (event) {
          thisTemp.css(thisTemp.CB['definitionP'], 'display', 'none')
        }, 500)
      };
      this.addListenerInside('mouseout', defMouseOut, thisTemp.CB['definitionP']);
      var defMouseOver = function (event) {
        if (setTimeOutP) {
          window.clearTimeout(setTimeOutP);
          setTimeOutP = null
        }
      };
      this.addListenerInside('mouseover', defMouseOver, thisTemp.CB['definitionP'])
    },
    newDefinition: function (title) {
      var vArr = this.VA;
      var nVArr = [
      ];
      var i = 0;
      for (i = 0; i < vArr.length; i++) {
        var v = vArr[i];
        if (v[2] == title) {
          nVArr.push(v);
          this.sendJS('definitionChange', i + '')
        }
      }
      if (nVArr.length < 1) {
        return
      }
      if (this.V != null && this.needSeek == 0) {
        this.needSeek = this.V.currentTime
      }
      if (this.getFileExt(nVArr[0][0]) != '.m3u8') {
        this.isM3u8 = false
      }
      if (!this.isM3u8) {
        if (nVArr.length == 1) {
          this.V.innerHTML = '';
          this.V.src = nVArr[0][0]
        } else {
          var source = '';
          nVArr = this.arrSort(nVArr);
          for (i = 0; i < nVArr.length; i++) {
            var type = '';
            var va = nVArr[i];
            if (va[1]) {
              type = ' type="' + va[1] + '"'
            }
            source += '<source src="' + va[0] + '"' + type + '>'
          }
          this.V.removeAttribute('src');
          this.V.innerHTML = source
        }
      } else {
        this.embedHls(vArr[0][0], this.vars['autoplay'])
      }
      this.V.autoplay = 'autoplay';
      this.V.load();
      this.timerErrorFun()
    },
    embedHls: function (url, autoplay) {
      var thisTemp = this;
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(this.V);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          thisTemp.playerLoad();
          if (autoplay) {
            thisTemp.videoPlay()
          }
        })
      }
    },
    prompt: function () {
      if (!this.showFace) {
        return
      }
      var thisTemp = this;
      var prompt = this.vars['promptSpot'];
      if (prompt == null || this.promptArr.length > 0) {
        return
      }
      var showPrompt = function (event) {
        if (thisTemp.promptElement == null) {
          var random2 = 'prompte' + thisTemp.randomString(5);
          var ele2 = document.createElement('div');
          ele2.className = random2;
          thisTemp.PD.appendChild(ele2);
          thisTemp.promptElement = thisTemp.getByElement(random2);
          thisTemp.css(thisTemp.promptElement, {
            overflowX: 'hidden',
            lineHeight: '22px',
            fontSize: '14px',
            color: '#FFFFFF',
            position: 'absolute',
            display: 'block',
            zIndex: '90'
          })
        }
        var pcon = thisTemp.getPromptTest();
        var pW = pcon['pW'],
        pT = pcon['pT'],
        pL = parseInt(thisTemp.css(this, 'left')) - parseInt(pW * 0.5);
        if (pcon['pL'] > 10) {
          pL = pcon['pL']
        }
        if (pL < 0) {
          pL = 0
        }
        thisTemp.css(thisTemp.promptElement, {
          width: pW + 'px',
          left: ( - pW - 10) + 'px',
          display: 'block'
        });
        thisTemp.promptElement.innerHTML = thisTemp.getDataset(this, 'words');
        thisTemp.css(thisTemp.promptElement, {
          left: pL + 'px',
          top: (pT - thisTemp.promptElement.offsetHeight - 10) + 'px'
        })
      };
      var hidePrompt = function (event) {
        if (thisTemp.promptElement != null) {
          thisTemp.css(thisTemp.promptElement, {
            display: 'none'
          })
        }
      };
      var i = 0;
      for (i = 0; i < prompt.length; i++) {
        var pr = prompt[i];
        var words = pr['words'];
        var time = pr['time'];
        var random = 'prompt' + this.randomString(5);
        var ele = document.createElement('div');
        ele.className = random;
        this.CB['timeBoBg'].appendChild(ele);
        var div = this.getByElement(random);
        div.setAttribute('data-time', time);
        div.setAttribute('data-words', words);
        this.css(div, {
          width: '6px',
          height: '6px',
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          top: '4px',
          left: '-100px',
          display: 'none',
          zIndex: '1',
          borderRadius: '6px'
        });
        this.addListenerInside('mouseover', showPrompt, div);
        this.addListenerInside('mouseout', hidePrompt, div);
        this.promptArr.push(div)
      }
      this.changePrompt()
    },
    getPromptTest: function () {
      var pW = this.previewWidth,
      pT = this.getCoor(this.CB['timeButton']) ['y'],
      pL = 0;
      if (this.previewTop != null) {
        pT -= parseInt(this.css(this.previewTop, 'height'));
        pL = parseInt(this.css(this.previewTop, 'left'))
      } else {
        pT -= 35
      }
      pL += 2;
      if (pL < 0) {
        pL = 0
      }
      if (pL > this.PD.offsetWidth - pW) {
        pL = this.PD.offsetWidth - pW
      }
      return {
        pW: pW,
        pT: pT,
        pL: pL
      }
    },
    deletePrompt: function () {
      var arr = this.promptArr;
      if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) {
            this.deleteChild(arr[i])
          }
        }
      }
      this.promptArr = [
      ]
    },
    changePrompt: function () {
      if (this.promptArr.length == 0) {
        return
      }
      var arr = this.promptArr;
      var duration = this.getMetaDate() ['duration'];
      var bw = this.CB['timeBoBg'].offsetWidth;
      for (var i = 0; i < arr.length; i++) {
        var time = parseInt(this.getDataset(arr[i], 'time'));
        var left = parseInt(time * bw / duration) - parseInt(arr[i].offsetWidth * 0.5);
        if (left < 0) {
          left = 0
        }
        if (left > bw - parseInt(arr[i].offsetWidth * 0.5)) {
          left = bw - parseInt(arr[i].offsetWidth * 0.5)
        }
        this.css(arr[i], {
          left: left + 'px',
          display: 'block'
        })
      }
    },
    preview: function (obj) {
      var thisTemp = this;
      var preview = {
        file: null,
        scale: 0
      };
      preview = this.standardization(preview, this.vars['preview']);
      if (preview['file'] == null || preview['scale'] <= 0) {
        return
      }
      var srcArr = preview['file'];
      if (this.previewStart == 0) {
        this.previewStart = 1;
        if (srcArr.length > 0) {
          var i = 0;
          var imgW = 0,
          imgH = 0;
          var random = thisTemp.randomString(10);
          var loadNum = 0;
          var loadImg = function (i) {
            srcArr[i] = thisTemp.getNewUrl(srcArr[i]);
            var n = 0;
            var img = new Image();
            img.src = srcArr[i];
            img.className = random + i;
            img.onload = function (event) {
              loadNum++;
              if (thisTemp.previewDiv == null) {
                imgW = img.width;
                imgH = img.height;
                thisTemp.previewWidth = parseInt(imgW * 0.1);
                var ele = document.createElement('div');
                ele.className = random;
                thisTemp.PD.appendChild(ele);
                thisTemp.previewDiv = thisTemp.getByElement(random);
                var eleTop = (obj['y'] - parseInt(imgH * 0.1) + 2);
                thisTemp.css(thisTemp.previewDiv, {
                  width: srcArr.length * imgW * 10 + 'px',
                  height: parseInt(imgH * 0.1) + 'px',
                  backgroundColor: '#000000',
                  position: 'absolute',
                  left: '0px',
                  top: eleTop + 'px',
                  display: 'none',
                  zIndex: '80'
                });
                ele.setAttribute('data-x', '0');
                ele.setAttribute('data-y', eleTop);
                var ele2 = document.createElement('div');
                ele2.className = random + 'd2';
                thisTemp.PD.appendChild(ele2);
                thisTemp.previewTop = thisTemp.getByElement(ele2.className);
                thisTemp.css(thisTemp.previewTop, {
                  width: parseInt(imgW * 0.1) + 'px',
                  height: parseInt(imgH * 0.1) + 'px',
                  position: 'absolute',
                  border: '5px solid ' + thisTemp.css(thisTemp.CB['timeProgress'], 'backgroundColor'),
                  left: '0px',
                  top: (obj['y'] - parseInt(imgH * 0.1) + 2) + 'px',
                  display: 'none',
                  zIndex: '81'
                });
                var html = '';
                for (n = 0; n < srcArr.length; n++) {
                  html += thisTemp.newCanvas(random + n, imgW * 10, parseInt(imgH * 0.1))
                }
                thisTemp.previewDiv.innerHTML = html
              }
              thisTemp.previewDiv.appendChild(img);
              var cimg = thisTemp.getByElement(img.className);
              var canvas = thisTemp.getByElement(img.className + '-canvas');
              var context = canvas.getContext('2d');
              var sx = 0,
              sy = 0,
              x = 0,
              h = parseInt(imgH * 0.1);
              for (n = 0; n < 100; n++) {
                x = parseInt(n * imgW * 0.1);
                context.drawImage(cimg, sx, sy, parseInt(imgW * 0.1), h, x, 0, parseInt(imgW * 0.1), h);
                sx += parseInt(imgW * 0.1);
                if (sx >= imgW) {
                  sx = 0;
                  sy += h
                }
                thisTemp.css(cimg, 'display', 'none')
              }
              if (loadNum == srcArr.length) {
                thisTemp.previewStart = 2
              } else {
                i++;
                loadImg(i)
              }
            }
          }
        }
        loadImg(i);
        return
      }
      if (this.previewStart == 2) {
        var isTween = true;
        var nowNum = parseInt(obj['time'] / this.vars['preview']['scale']);
        var numTotal = parseInt(thisTemp.getMetaDate() ['duration'] / this.vars['preview']['scale']);
        if (thisTemp.css(thisTemp.previewDiv, 'display') == 'none') {
          isTween = false
        }
        thisTemp.css(thisTemp.previewDiv, 'display', 'block');
        var imgWidth = thisTemp.previewDiv.offsetWidth * 0.01 / srcArr.length;
        var left = (imgWidth * nowNum) - obj['x'] + parseInt(imgWidth * 0.5),
        top = obj['y'] - thisTemp.previewDiv.offsetHeight;
        thisTemp.css(thisTemp.previewDiv, 'top', top + 2 + 'px');
        var topLeft = obj['x'] - parseInt(imgWidth * 0.5);
        var timepieces = 0;
        if (topLeft < 0) {
          topLeft = 0;
          timepieces = obj['x'] - topLeft - imgWidth * 0.5
        }
        if (topLeft > thisTemp.PD.offsetWidth - imgWidth) {
          topLeft = thisTemp.PD.offsetWidth - imgWidth;
          timepieces = obj['x'] - topLeft - imgWidth * 0.5
        }
        if (left < 0) {
          left = 0
        }
        if (left > numTotal * imgWidth - thisTemp.PD.offsetWidth) {
          left = numTotal * imgWidth - thisTemp.PD.offsetWidth
        }
        thisTemp.css(thisTemp.previewTop, {
          left: topLeft + 'px',
          top: top + 2 + 'px',
          display: 'block'
        });
        if (thisTemp.previewTop.offsetHeight > thisTemp.previewDiv.offsetHeight) {
          thisTemp.css(thisTemp.previewTop, {
            height: thisTemp.previewDiv.offsetHeight - (thisTemp.previewTop.offsetHeight - thisTemp.previewDiv.offsetHeight) + 'px'
          })
        }
        if (this.previewTween != null) {
          this.animatePause(this.previewTween);
          this.previewTween = null
        }
        var nowLeft = parseInt(thisTemp.css(thisTemp.previewDiv, 'left'));
        var leftC = nowLeft + left;
        if (nowLeft == - (left + timepieces)) {
          return
        }
        if (isTween) {
          var obj = {
            element: thisTemp.previewDiv,
            start: null,
            end: - (left + timepieces),
            speed: 0.3
          };
          this.previewTween = this.animate(obj)
        } else {
          thisTemp.css(thisTemp.previewDiv, 'left', - (left + timepieces) + 'px')
        }
      }
    },
    deletePreview: function () {
      if (this.previewDiv != null) {
        this.deleteChild(this.previewDiv);
        this.previewDiv = null;
        this.previewStart = 0
      }
    },
    changeVideo: function () {
      if (!this.html5Video) {
        this.getVarsObject();
        this.V.newVideo(this.vars);
        return
      }
      var vArr = this.VA;
      var v = this.vars;
      var i = 0;
      if (vArr.length < 1) {
        return
      }
      if (this.V != null && this.needSeek == 0) {
        this.needSeek = this.V.currentTime
      }
      if (v['poster']) {
        this.V.poster = v['poster']
      } else {
        this.V.removeAttribute('poster')
      }
      if (v['loop']) {
        this.V.loop = 'loop'
      } else {
        this.V.removeAttribute('loop')
      }
      if (v['seek'] > 0) {
        this.needSeek = v['seek']
      } else {
        this.needSeek = 0
      }
      if (this.getFileExt(vArr[0][0]) != '.m3u8') {
        this.isM3u8 = false
      }
      if (!this.isM3u8) {
        if (vArr.length == 1) {
          this.V.innerHTML = '';
          this.V.src = vArr[0][0]
        } else {
          var source = '';
          vArr = this.arrSort(vArr);
          for (i = 0; i < vArr.length; i++) {
            var type = '';
            var va = vArr[i];
            if (va[1]) {
              type = ' type="' + va[1] + '"'
            }
            source += '<source src="' + va[0] + '"' + type + '>'
          }
          this.V.removeAttribute('src');
          this.V.innerHTML = source
        }
        if (v['autoplay']) {
          this.V.autoplay = 'autoplay'
        } else {
          this.V.removeAttribute('autoplay')
        }
        this.V.load()
      } else {
        this.embedHls(vArr[0][0], v['autoplay'])
      }
      if (!this.isUndefined(v['volume'])) {
        this.changeVolume(v['volume'])
      }
      this.resetPlayer();
      this.timerErrorFun();
      if (this.vars['cktrack']) {
        this.loadTrack()
      }
    },
    elementCoordinate: function () {
      this.pdCoor = this.getXY(this.PD);
      this.css(this.CB['pauseCenter'], {
        left: parseInt((this.PD.offsetWidth - 80) * 0.5) + 'px',
        top: parseInt((this.PD.offsetHeight - 80) * 0.5) + 'px'
      });
      this.css(this.CB['loading'], {
        left: parseInt((this.PD.offsetWidth - 60) * 0.5) + 'px',
        top: parseInt((this.PD.offsetHeight - 60) * 0.5) + 'px'
      });
      this.css(this.CB['errorText'], {
        left: parseInt((this.PD.offsetWidth - 120) * 0.5) + 'px',
        top: parseInt((this.PD.offsetHeight - 30) * 0.5) + 'px'
      });
      this.css(this.CB['logo'], {
        left: parseInt(this.PD.offsetWidth - this.CB['logo'].offsetWidth - 20) + 'px',
        top: '20px'
      });
      this.checkBarWidth()
    },
    checkBarWidth: function () {
      if (!this.showFace) {
        return
      }
      var controlBarW = this.CB['controlBar'].offsetWidth;
      var ele = [
      ];
      ele.push([[this.CB['full'],
      this.CB['escFull'],
      this.CB['fullLine']],
      this.buttonWidth['full'] + 2,
      'full']);
      if (this.vars['front'] != '') {
        ele.push([[this.CB['front'],
        this.CB['frontLine']],
        this.buttonWidth['front'] + 2])
      }
      if (this.vars['next'] != '') {
        ele.push([[this.CB['next'],
        this.CB['nextLine']],
        this.buttonWidth['next'] + 2])
      }
      if (this.CB['definition'].innerHTML != '') {
        ele.push([[this.CB['definition'],
        this.CB['definitionLine']],
        this.buttonWidth['definition'] + 2])
      }
      ele.push([[this.CB['volume']],
      this.buttonWidth['volume']]);
      ele.push([[this.CB['mute'],
      this.CB['escMute'],
      this.CB['muteLine']],
      this.buttonWidth['mute'] + 2,
      'mute']);
      ele.push([[this.CB['timeText']],
      this.buttonWidth['timeText']]);
      ele.push([[this.CB['play'],
      this.CB['pause'],
      this.CB['playLine']],
      this.buttonWidth['play'] + 2,
      'play']);
      var i = 0;
      var len = 0;
      var isc = true;
      for (var i = 0; i < ele.length; i++) {
        var nlen = ele[i][1];
        if (nlen > 2) {
          len += nlen
        } else {
          isc = false
        }
      }
      if (isc) {
        this.buttonLen = len;
        this.buttonArr = ele
      }
      len = this.buttonLen;
      ele = this.buttonArr;
      for (var i = 0; i < ele.length; i++) {
        if (len > controlBarW) {
          len -= ele[i][1];
          this.css(ele[i][0], 'display', 'none')
        } else {
          this.css(ele[i][0], 'display', 'block');
          if (ele[i].length == 3) {
            var name = ele[i][2];
            switch (name) {
              case 'mute':
                if (this.volume == 0) {
                  this.css(this.CB['mute'], 'display', 'none')
                } else {
                  this.css(this.CB['escMute'], 'display', 'none')
                }
                break;
              case 'play':
                this.playShow(this.V.paused ? false : true);
                break;
              case 'full':
                if (this.full) {
                  this.css(this.CB['full'], 'display', 'none')
                } else {
                  this.css(this.CB['escFull'], 'display', 'none')
                }
                break
            }
          }
        }
      }
    },
    initPlayPause: function () {
      if (!this.showFace) {
        return
      }
      if (this.vars['autoplay']) {
        this.css([this.CB['play'],
        this.CB['pauseCenter']], 'display', 'none');
        this.css(this.CB['pause'], 'display', 'block')
      } else {
        this.css(this.CB['play'], 'display', 'block');
        if (this.css(this.CB['errorText'], 'display') == 'none') {
          this.css(this.CB['pauseCenter'], 'display', 'block')
        }
        this.css(this.CB['pause'], 'display', 'none')
      }
    },
    loadedHandler: function () {
      this.loaded = true;
      if (this.vars['loaded'] != '') {
        try {
          eval(this.vars['loaded'] + '()')
        } catch (event) {
          this.log(event)
        }
      }
    },
    playingHandler: function () {
      this.playShow(true);
      if (this.needSeek > 0) {
        this.videoSeek(this.needSeek);
        this.needSeek = 0
      }
      if (this.animatePauseArray.length > 0) {
        this.animateResume('pause')
      }
      if (this.playerType == 'html5video' && this.V != null && this.config['videoDrawImage']) {
        this.sendVCanvas()
      }
    },
    sendVCanvas: function () {
      if (this.timerVCanvas == null) {
        this.css(this.V, 'display', 'none');
        this.css(this.MD, 'display', 'block');
        var thisTemp = this;
        var videoCanvas = function () {
          if (thisTemp.MDCX.width != thisTemp.PD.offsetWidth) {
            thisTemp.MDC.width = thisTemp.PD.offsetWidth
          }
          if (thisTemp.MDCX.height != thisTemp.PD.offsetHeight) {
            thisTemp.MDC.height = thisTemp.PD.offsetHeight
          }
          thisTemp.MDCX.clearRect(0, 0, thisTemp.MDCX.width, thisTemp.MDCX.height);
          var coor = thisTemp.getProportionCoor(thisTemp.PD.offsetWidth, thisTemp.PD.offsetHeight, thisTemp.V.videoWidth, thisTemp.V.videoHeight);
          thisTemp.MDCX.drawImage(thisTemp.V, 0, 0, thisTemp.V.videoWidth, thisTemp.V.videoHeight, coor['x'], coor['y'], coor['width'], coor['height'])
        };
        this.timerVCanvas = new this.timer(0, videoCanvas)
      }
    },
    pauseHandler: function () {
      this.playShow(false);
      if (this.animatePauseArray.length > 0) {
        this.animatePause('pause')
      }
      if (this.playerType == 'html5video' && this.V != null && this.config['videoDrawImage']) {
        this.stopVCanvas()
      }
    },
    stopVCanvas: function () {
      if (this.timerVCanvas != null) {
        this.css(this.V, 'display', 'block');
        this.css(this.MD, 'display', 'none');
        if (this.timerVCanvas.runing) {
          this.timerVCanvas.stop()
        }
        this.timerVCanvas = null
      }
    },
    playShow: function (b) {
      if (!this.showFace) {
        return
      }
      if (b) {
        this.css(this.CB['play'], 'display', 'none');
        this.css(this.CB['pauseCenter'], 'display', 'none');
        this.css(this.CB['pause'], 'display', 'block')
      } else {
        this.css(this.CB['play'], 'display', 'block');
        if (this.css(this.CB['errorText'], 'display') == 'none') {
          this.css(this.CB['pauseCenter'], 'display', 'block')
        } else {
          this.css(this.CB['pauseCenter'], 'display', 'none')
        }
        this.css(this.CB['pause'], 'display', 'none')
      }
    },
    seekedHandler: function () {
      this.resetTrack();
      this.isTimeButtonMove = true;
      if (this.V.paused) {
        this.videoPlay()
      }
    },
    endedHandler: function () {
      if (!this.vars['loop']) {
        this.videoPause()
      }
    },
    volumechangeHandler: function () {
      if (!this.showFace) {
        return
      }
      try {
        if (this.V.volume > 0) {
          this.css(this.CB['mute'], 'display', 'block');
          this.css(this.CB['escMute'], 'display', 'none')
        } else {
          this.css(this.CB['mute'], 'display', 'none');
          this.css(this.CB['escMute'], 'display', 'block')
        }
      } catch (event) {
      }
    },
    timeUpdateHandler: function () {
      var duration = 0;
      if (this.playerType == 'html5video') {
        try {
          duration = this.V.duration
        } catch (event) {
        }
      }
      if (duration > 0) {
        this.time = this.V.currentTime;
        this.timeTextHandler();
        this.trackShowHandler();
        if (this.isTimeButtonMove) {
          this.timeProgress(this.time, duration)
        }
      }
    },
    timeProgress: function (time, duration) {
      if (!this.showFace) {
        return
      }
      var timeProgressBgW = this.CB['timeProgressBg'].offsetWidth;
      var timeBOW = parseInt((time * timeProgressBgW / duration) - (this.CB['timeButton'].offsetWidth * 0.5));
      if (timeBOW > timeProgressBgW - this.CB['timeButton'].offsetWidth) {
        timeBOW = timeProgressBgW - this.CB['timeButton'].offsetWidth
      }
      if (timeBOW < 0) {
        timeBOW = 0
      }
      this.css(this.CB['timeProgress'], 'width', timeBOW + 'px');
      this.css(this.CB['timeButton'], 'left', parseInt(timeBOW) + 'px')
    },
    timeTextHandler: function () {
      if (!this.showFace) {
        return
      }
      var duration = this.V.duration;
      var time = this.V.currentTime;
      if (isNaN(duration) || parseInt(duration) < 0.2) {
        duration = this.vars['duration']
      }
      this.CB['timeText'].innerHTML = this.formatTime(time) + ' / ' + this.formatTime(duration);
      if (this.CB['timeText'].offsetWidth > 0) {
        this.buttonWidth['timeText'] = this.CB['timeText'].offsetWidth
      }
    },
    bufferEdHandler: function () {
      if (!this.showFace || this.playerType == 'flashplayer') {
        return
      }
      var thisTemp = this;
      var clearTimerBuffer = function () {
        if (thisTemp.timerBuffer != null) {
          if (thisTemp.timerBuffer.runing) {
            thisTemp.sendJS('buffer', 100);
            thisTemp.timerBuffer.stop()
          }
          thisTemp.timerBuffer = null
        }
      };
      clearTimerBuffer();
      var bufferFun = function () {
        if (thisTemp.V.buffered.length > 0) {
          var duration = thisTemp.V.duration;
          var len = thisTemp.V.buffered.length;
          var bufferStart = thisTemp.V.buffered.start(len - 1);
          var bufferEnd = thisTemp.V.buffered.end(len - 1);
          var loadTime = bufferStart + bufferEnd;
          var loadProgressBgW = thisTemp.CB['timeProgressBg'].offsetWidth;
          var timeButtonW = thisTemp.CB['timeButton'].offsetWidth;
          var loadW = parseInt((loadTime * loadProgressBgW / duration) + timeButtonW);
          if (loadW >= loadProgressBgW) {
            loadW = loadProgressBgW;
            clearTimerBuffer()
          }
          thisTemp.changeLoad(loadTime)
        }
      };
      this.timerBuffer = new this.timer(200, bufferFun)
    },
    changeLoad: function (loadTime) {
      if (this.V == null) {
        return
      }
      if (!this.showFace) {
        return
      }
      var loadProgressBgW = this.CB['timeProgressBg'].offsetWidth;
      var timeButtonW = this.CB['timeButton'].offsetWidth;
      var duration = this.V.duration;
      if (this.isUndefined(loadTime)) {
        loadTime = this.loadTime
      } else {
        this.loadTime = loadTime
      }
      var loadW = parseInt((loadTime * loadProgressBgW / duration) + timeButtonW);
      this.css(this.CB['loadProgress'], 'width', loadW + 'px')
    },
    judgeIsLive: function () {
      var thisTemp = this;
      if (this.timerError != null) {
        if (this.timerError.runing) {
          this.timerError.stop()
        }
        this.timerError = null
      }
      this.error = false;
      if (this.showFace) {
        this.css(this.CB['errorText'], 'display', 'none')
      }
      var timeupdate = function (event) {
        thisTemp.timeUpdateHandler()
      };
      if (!this.vars['live']) {
        if (this.V != null && this.playerType == 'html5video') {
          this.addListenerInside('timeupdate', timeupdate);
          thisTemp.timeTextHandler();
          thisTemp.prompt();
          window.setTimeout(function () {
            thisTemp.bufferEdHandler()
          }, 200)
        }
      } else {
        this.removeListenerInside('timeupdate', timeupdate);
        if (this.timerTime != null) {
          window.clearInterval(this.timerTime);
          timerTime = null
        }
        if (this.timerTime != null) {
          if (this.timerTime.runing) {
            this.timerTime.stop()
          }
          this.timerTime = null
        }
        var timeFun = function () {
          if (thisTemp.V != null && !thisTemp.V.paused && thisTemp.showFace) {
            thisTemp.CB['timeText'].innerHTML = thisTemp.getNowDate()
          }
        };
        this.timerTime = new this.timer(1000, timeFun)
      }
      this.definition()
    },
    loadTrack: function () {
      if (this.playerType == 'flashplayer' || this.vars['flashplayer'] == true) {
        return
      }
      var thisTemp = this;
      var track = this.vars['cktrack'];
      var obj = {
        method: 'get',
        dataType: 'text',
        url: track,
        charset: 'utf-8',
        success: function (data) {
          thisTemp.track = thisTemp.parseSrtSubtitles(data);
          thisTemp.trackIndex = 0;
          thisTemp.nowTrackShow = {
            sn: ''
          }
        }
      };
      this.ajax(obj)
    },
    resetTrack: function () {
      this.trackIndex = 0;
      this.nowTrackShow = {
        sn: ''
      }
    },
    trackShowHandler: function () {
      if (!this.showFace) {
        return
      }
      if (this.track.length < 1) {
        return
      }
      if (this.trackIndex >= this.track.length) {
        this.trackIndex = 0
      }
      var nowTrack = this.track[this.trackIndex];
      if (this.time >= nowTrack['startTime'] && this.time <= nowTrack['endTime']) {
        var nowShow = this.nowTrackShow;
        if (nowShow['sn'] != nowTrack['sn']) {
          this.trackHide();
          this.trackShow(nowTrack)
        }
      } else {
        this.trackHide();
        this.checkTrack()
      }
    },
    trackShow: function (track) {
      this.nowTrackShow = track;
      var arr = track['content'];
      for (var i = 0; i < arr.length; i++) {
        var obj = {
          list: [
            {
              type: 'text',
              text: arr[i],
              color: '#FFFFFF',
              size: 16,
              font: this.fontFamily,
              lineHeight: 30
            }
          ],
          position: [
            1,
            2,
            null,
            - (arr.length - i) * 30 - 50
          ]
        };
        var ele = this.addElement(obj);
        this.trackElement.push(ele)
      }
    },
    trackHide: function () {
      for (var i = 0; i < this.trackElement.length; i++) {
        this.deleteElement(this.trackElement[i])
      }
      this.trackElement = [
      ]
    },
    checkTrack: function () {
      var num = this.trackIndex;
      var arr = this.track;
      var i = 0;
      for (i = num; i < arr.length; i++) {
        if (this.time >= arr[i]['startTime'] && this.time <= arr[i]['endTime']) {
          this.trackIndex = i;
          break
        }
      }
    },
    playOrPause: function () {
      if (!this.loaded) {
        return
      }
      if (this.config['videoClick']) {
        if (this.V == null) {
          return
        }
        if (this.playerType == 'flashplayer') {
          this.V.playOrPause();
          return
        }
        if (this.V.paused) {
          this.videoPlay()
        } else {
          this.videoPause()
        }
      }
    },
    videoPlay: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoPlay();
        return
      }
      this.V.play()
    },
    videoPause: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoPause();
        return
      }
      this.V.pause()
    },
    videoSeek: function (time) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoSeek(time);
        return
      }
      var meta = this.getMetaDate();
      var duration = meta['duration'];
      if (duration > 0 && time > duration) {
        time = duration
      }
      if (time >= 0) {
        this.V.currentTime = time;
        this.sendJS('seekTime', time)
      }
    },
    changeVolume: function (vol, bg, button) {
      if (this.loaded) {
        if (this.playerType == 'flashplayer') {
          this.V.changeVolume(time);
          return
        }
      }
      if (isNaN(vol) || this.isUndefined(vol)) {
        vol = 0
      }
      if (!this.loaded) {
        this.vars['volume'] = vol
      }
      if (!this.html5Video) {
        this.V.changeVolume(vol);
        return
      }
      try {
        if (this.isUndefined(bg)) {
          bg = true
        }
      } catch (e) {
      }
      try {
        if (this.isUndefined(button)) {
          button = true
        }
      } catch (e) {
      }
      if (!vol) {
        vol = 0
      }
      if (vol < 0) {
        vol = 0
      }
      if (vol > 1) {
        vol = 1
      }
      try {
        this.V.volume = vol
      } catch (error) {
      }
      this.volume = vol;
      if (bg && this.showFace) {
        var bgW = vol * this.CB['volumeBg'].offsetWidth;
        if (bgW < 0) {
          bgW = 0
        }
        if (bgW > this.CB['volumeBg'].offsetWidth) {
          bgW = this.CB['volumeBg'].offsetWidth
        }
        this.css(this.CB['volumeUp'], 'width', bgW + 'px')
      }
      if (button && this.showFace) {
        var buLeft = parseInt(this.CB['volumeUp'].offsetWidth - (this.CB['volumeBO'].offsetWidth * 0.5));
        if (buLeft > this.CB['volumeBg'].offsetWidth - this.CB['volumeBO'].offsetWidth) {
          buLeft = this.CB['volumeBg'].offsetWidth - this.CB['volumeBO'].offsetWidth
        }
        if (buLeft < 0) {
          buLeft = 0
        }
        this.css(this.CB['volumeBO'], 'left', buLeft + 'px')
      }
    },
    videoMute: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoMute();
        return
      }
      this.volumeTemp = this.V ? (this.V.volume > 0 ? this.V.volume : this.vars['volume'])  : this.vars['volume'];
      this.changeVolume(0)
    },
    videoEscMute: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoEscMute();
        return
      }
      this.changeVolume(this.volumeTemp > 0 ? this.volumeTemp : this.vars['volume'])
    },
    fastBack: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.fastBack();
        return
      }
      var time = this.time - this.ckplayerConfig['config']['timeJump'];
      if (time < 0) {
        time = 0
      }
      this.videoSeek(time)
    },
    fastNext: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.fastNext();
        return
      }
      var time = this.time + this.ckplayerConfig['config']['timeJump'];
      if (time > this.V.duration) {
        time = this.V.duration
      }
      this.videoSeek(time)
    },
    getCurrentSrc: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        return this.V.getCurrentSrc()
      }
      return this.V.currentSrc
    },
    switchFull: function () {
      if (this.full) {
        this.quitFullScreen()
      } else {
        this.fullScreen()
      }
    },
    fullScreen: function () {
      if (this.html5Video && this.playerType == 'html5video') {
        var element = this.PD;
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        } else if (element.oRequestFullscreen) {
          element.oRequestFullscreen()
        }
        this.judgeFullScreen()
      } else {
      }
    },
    quitFullScreen: function () {
      if (this.html5Video && this.playerType == 'html5video') {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.oRequestFullscreen) {
          document.oCancelFullScreen()
        } else if (document.requestFullscreen) {
          document.requestFullscreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        } else {
          this.css(document.documentElement, 'cssText', '');
          this.css(document.document.body, 'cssText', '');
          this.css(this.PD, 'cssText', '')
        }
        this.judgeFullScreen()
      }
    },
    videoRotation: function (n) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoRotation(n);
        return
      }
      if (this.isUndefined(n)) {
        n = 0
      }
      var tf = this.css(this.V, 'transform');
      if (this.isUndefined(tf) && !tf) {
        tf = 'rotate(0deg)'
      }
      var reg = tf.match(/rotate\([^)]+\)/);
      reg = reg ? reg[0].replace('rotate(', '').replace('deg)', '')  : '';
      if (reg == '') {
        reg = 0
      } else {
        reg = parseInt(reg)
      }
      if (n == - 1) {
        reg -= 90
      } else if (n == 1) {
        reg += 90
      } else {
        if (n != 90 && n != 180 && n != 270 && n != - 90 && n != - 180 && n != - 270) {
          reg = 0
        } else {
          reg = n
        }
      }
      n = reg;
      tf = tf.replace(/rotate\([^)]+\)/, '') + ' rotate(' + n + 'deg)';
      this.css(this.V, 'transform', tf);
      return
    },
    videoBrightness: function (n) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoBrightness(n);
        return
      }
    },
    videoContrast: function (n) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoContrast(n);
        return
      }
    },
    videoSaturation: function (n) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoSaturation(n);
        return
      }
    },
    videoHue: function (n) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoHue(n);
        return
      }
    },
    videoZoom: function (n) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoZoom(n);
        return
      }
      if (this.isUndefined(n)) {
        n = 1
      }
      if (n < 0) {
        n = 0
      }
      if (n > 2) {
        n = 2
      }
      var tf = this.css(this.V, 'transform');
      tf = tf.replace(/scale\([^)]+\)/, '') + ' scale(' + n + ')';
      this.css(this.V, 'transform', tf);
      return
    },
    videoProportion: function (w, h) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoProportion(w, h);
        return
      }
    },
    adPlay: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.adPlay();
        return
      }
    },
    adPause: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.adPause();
        return
      }
    },
    videoError: function (n) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoError(n);
        return
      }
    },
    changeConfig: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.changeConfig(arguments);
        return
      }
      var obj = this.ckplayerConfig;
      var arg = arguments;
      for (var i = 0; i < arg.length - 1; i++) {
        if (obj.hasOwnProperty(arg[i])) {
          obj = obj[arg[i]]
        } else {
          return
        }
      }
      var val = arg[arg.length - 1];
      switch (arg.length) {
        case 2:
          this.ckplayerConfig[arg[0]] = val;
          break;
        case 3:
          this.ckplayerConfig[arg[0]][arg[1]] = val;
          break;
        case 4:
          this.ckplayerConfig[arg[0]][arg[1]][arg[2]] = val;
          break;
        case 5:
          this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]] = val;
          break;
        case 6:
          this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]] = val;
          break;
        case 7:
          this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]] = val;
          break;
        case 8:
          this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]] = val;
          break;
        case 9:
          this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]][arg[7]] = val;
          break;
        case 10:
          this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]][arg[7]][arg[8]] = val;
          break;
        default:
          return;
          break
      }
      this.sendJS('configChange', this.ckplayerConfig)
    },
    custom: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.custom(arguments);
        return
      }
    },
    getConfig: function () {
      if (!this.loaded) {
        return null
      }
      if (this.playerType == 'flashplayer') {
        return this.V.getConfig(arguments)
      }
    },
    openUrl: function (n) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.openUrl(n);
        return
      }
    },
    videoClear: function () {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.videoClear();
        return
      }
    },
    newVideo: function (c) {
      if (this.playerType == 'flashplayer') {
        this.V.newVideo(c);
        return
      } else {
        this.embed(c)
      }
    },
    screenshot: function (obj, save, name) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        try {
          this.V.screenshot(obj, save, name)
        } catch (error) {
          this.log(error)
        }
        return
      }
      if (obj == 'video') {
        var newCanvas = document.createElement('canvas');
        newCanvas.width = this.V.videoWidth;
        newCanvas.height = this.V.videoHeight;
        newCanvas.getContext('2d').drawImage(this.V, 0, 0, this.V.videoWidth, this.V.videoHeight);
        try {
          var base64 = newCanvas.toDataURL('image/jpeg');
          this.sendJS('screenshot', {
            object: obj,
            save: save,
            name: name,
            base64: base64
          })
        } catch (error) {
          this.log(error)
        }
      }
    },
    changeSize: function (w, h) {
      if (this.isUndefined(w)) {
        w = 0
      }
      if (this.isUndefined(h)) {
        h = 0
      }
      if (w > 0) {
        this.css(this.CD, 'width', w + 'px')
      }
      if (h > 0) {
        this.css(this.CD, 'height', h + 'px')
      }
      if (this.html5Video) {
        this.elementCoordinate()
      }
    },
    changePlaybackRate: function (n) {
      if (this.html5Video) {
        var arr = this.playbackRateArr;
        n = parseInt(n);
        if (n < arr.length) {
          this.newPlaybackrate(arr[n][1])
        }
      }
    },
    changeControlBarShow: function (show) {
      if (!this.loaded) {
        return
      }
      if (this.playerType == 'flashplayer') {
        this.V.changeControlBarShow(show);
        return
      }
      if (show) {
        this.controlBarIsShow = true;
        this.controlBarHide(false)
      } else {
        this.controlBarIsShow = false;
        this.controlBarHide(true)
      }
    },
    embedSWF: function () {
      var vid = this.randomString();
      var flashvars = this.getFlashVars();
      var param = this.getFlashplayerParam();
      var flashplayerUrl = 'http://www.macromedia.com/go/getflashplayer';
      var html = '',
      src = javascriptPath + 'ckplayer.swf';
      id = 'id="' + vid + '" name="' + vid + '" ';
      html += '<object pluginspage="' + flashplayerUrl + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" width="100%" height="100%" ' + id + ' align="middle">';
      html += param['v'];
      html += '<param name="movie" value="' + src + '">';
      html += '<param name="flashvars" value="' + flashvars + '">';
      html += '<embed ' + param['w'] + ' src="' + src + '" flashvars="' + flashvars + '" width="100%" height="100%" ' + id + ' align="middle" type="application/x-shockwave-flash" pluginspage="' + flashplayerUrl + '" />';
      html += '</object>';
      this.PD.innerHTML = html;
      this.V = this.getObjectById(vid);
      this.playerType = 'flashplayer'
    },
    getFlashVars: function () {
      this.getVarsObject();
      var v = this.vars;
      var z = '';
      for (k in v) {
        if (k != 'flashplayer' && k != 'container' && v[k] != '') {
          if (z != '') {
            z += '&'
          }
          var vk = v[k];
          if (vk == true) {
            vk = 1
          }
          if (vk == false) {
            vk = 0
          }
          z += k + '=' + vk
        }
      }
      if (!v.hasOwnProperty('volume') || !v['volume']) {
        if (z != '') {
          z += '&'
        }
        z += 'volume=0'
      }
      return z
    },
    getVarsObject: function () {
      var v = this.vars;
      var f = '',
      d = '',
      w = '';
      var arr = this.VA;
      var prompt = v['promptSpot'];
      var i = 0;
      var video = this.vars['video'];
      if (typeof (video) == 'object') {
        if (!this.isUndefined(typeof (video.length))) {
          var arr = video;
          for (i = 0; i < arr.length; i++) {
            var arr2 = arr[i];
            if (arr2) {
              if (f != '') {
                f += this.ckplayerConfig['config']['split'];
                d += ',';
                w += ',';
                v['type'] += this.ckplayerConfig['config']['split']
              }
              f += encodeURIComponent(decodeURIComponent(arr2[0]));
              d += arr2[2];
              w += arr2[3];
              v['type'] += arr2[1].replace('video/', '')
            }
          }
        } else {
          f = encodeURIComponent(decodeURIComponent(video['file']));
          if (!this.isUndefined(video['type'])) {
            v['type'] = video['type']
          }
          d = '';
          w = ''
        }
      } else {
        f = encodeURIComponent(decodeURIComponent(video))
      }
      if (v['preview'] != null) {
        v['previewscale'] = v['preview']['scale'];
        v['preview'] = v['preview']['file'].join(',')
      }
      if (prompt != null) {
        v['promptspot'] = '';
        v['promptspottime'] = '';
        for (i = 0; i < prompt.length; i++) {
          if (v['promptspot'] != '') {
            v['promptspot'] += ',';
            v['promptspottime'] += ','
          }
          v['promptspot'] += prompt[i]['words'];
          v['promptspottime'] += prompt[i]['time']
        }
      }
      if (f != '') {
        v['video'] = f;
        v['definition'] = d;
        v['weight'] = w
      }
      if (!v['volume']) {
        v['volume'] = 0
      }
      var newV = {
      };
      for (var k in v) {
        if (v[k] != null) {
          newV[k] = v[k]
        }
        if (k == 'type') {
          newV[k] = v[k].replace('video/m3u8', 'm3u8')
        }
      }
      this.vars = newV
    },
    getFlashplayerParam: function () {
      var w = '',
      v = '',
      o = {
        allowScriptAccess: 'always',
        allowFullScreen: true,
        quality: 'high',
        bgcolor: '#000'
      };
      for (var e in o) {
        w += e + '="' + o[e] + '" ';
        v += '<param name="' + e + '" value="' + o[e] + '" />'
      }
      w = w.replace('movie=', 'src=');
      return {
        w: w,
        v: v
      }
    },
    getMetaDate: function () {
      if (!this.loaded || this.V == null) {
        return false
      }
      if (this.playerType == 'html5video') {
        var duration = 0;
        try {
          duration = !isNaN(this.V.duration) ? this.V.duration : 0
        } catch (event) {
          this.log(event)
        }
        var data = {
          duration: duration,
          volume: this.V.volume,
          playbackRate: this.V.playbackRate,
          width: this.PD.offsetWidth || this.V.offsetWidth || this.V.width,
          height: this.PD.offsetHeight || this.V.offsetHeight || this.V.height,
          streamWidth: this.V.videoWidth,
          streamHeight: this.V.videoHeight,
          videoWidth: this.V.offsetWidth,
          videoHeight: this.V.offsetHeight,
          paused: this.V.paused
        };
        return data
      } else {
        try {
          return this.V.getMetaDate()
        } catch (event) {
          this.log(event)
        }
      }
      return false
    },
    getVideoUrl: function () {
      if (this.playerType == 'flashplayer') {
        return this.V.getVideoUrl()
      }
      var arr = [
      ];
      if (this.V.src) {
        arr.push(this.V.src)
      } else {
        var uArr = this.V.childNodes;
        for (var i = 0; i < uArr.length; i++) {
          arr.push(uArr[i].src)
        }
      }
      return arr
    },
    clickEvent: function (call) {
      if (call == 'none' || call == '' || call == null) {
        return {
          type: 'none'
        }
      }
      var callArr = call.split('->');
      var type = '',
      fun = '',
      link = '',
      target = '';
      if (callArr.length == 2) {
        var callM = callArr[0];
        var callE = callArr[1];
        if (!callE) {
          return {
            type: 'none'
          }
        }
        var val = '';
        var eArr = [
        ];
        type = callM;
        switch (callM) {
          case 'actionScript':
            if (callE.indexOf('(') > - 1) {
              eArr = callE.split('(');
              callE = eArr[0];
              val = eArr[1].replace(')', '')
            }
            if (val == '') {
              fun = 'thisTemp.' + callE + '()'
            } else {
              fun = 'thisTemp.' + callE + '(' + val + ')'
            }
            break;
          case 'javaScript':
            if (callE.substr(0, 11) == '[flashvars]') {
              callE = callE.substr(11);
              if (this.vars.hasOwnProperty(callE)) {
                callE = this.vars[callE]
              } else {
                break
              }
            }
            if (callE.indexOf('(') > - 1) {
              eArr = callE.split('(');
              callE = eArr[0];
              val = eArr[1].replace(')', '')
            }
            if (val == '') {
              fun = callE + '()'
            } else {
              fun = callE + '(' + val + ')'
            }
            break;
          case 'link':
            var callLink = (callE + ',').split(',');
            if (callLink[0].substr(0, 11) == '[flashvars]') {
              var fl = callLink[0].replace('[flashvars]', '');
              if (this.vars.hasOwnProperty(fl)) {
                callLink[0] = this.vars[fl]
              } else {
                break
              }
            }
            if (!callLink[1]) {
              callLink[1] = '_blank'
            }
            link = callLink[0];
            target = callLink[1];
            break
        }
      }
      return {
        type: type,
        fun: fun,
        link: link,
        target: target
      }
    },
    addElement: function (attribute) {
      var thisTemp = this;
      if (this.playerType == 'flashplayer') {
        return this.V.addElement(attribute)
      }
      var i = 0;
      var obj = {
        list: null,
        x: '100%',
        y: '50%',
        position: null,
        alpha: 1,
        backgroundColor: '',
        backAlpha: 1,
        backRadius: 0,
        clickEvent: ''
      };
      obj = this.standardization(obj, attribute);
      var list = obj['list'];
      if (list == null) {
        return ''
      }
      var id = 'element' + this.randomString(10);
      var ele = document.createElement('div');
      ele.className = id;
      if (obj['x']) {
        ele.setAttribute('data-x', obj['x'])
      }
      if (obj['y']) {
        ele.setAttribute('data-y', obj['y'])
      }
      if (obj['position'] != null) {
        ele.setAttribute('data-position', obj['position'].join(','))
      }
      this.PD.appendChild(ele);
      var eid = this.getByElement(id);
      this.css(eid, {
        position: 'absolute',
        filter: 'alpha(opacity:' + obj['alpha'] + ')',
        opacity: obj['alpha'].toString(),
        width: '800px',
        zIndex: '20'
      });
      var bgid = 'elementbg' + this.randomString(10);
      var bgAlpha = obj['alpha'].toString();
      var bgColor = obj['backgroundColor'].replace('0x', '#');
      var html = '';
      var idArr = [
      ];
      var clickArr = [
      ];
      if (!this.isUndefined(list) && list.length > 0) {
        var textObj,
        returnObj,
        clickEvent;
        for (i = 0; i < list.length; i++) {
          var newEleid = 'elementnew' + this.randomString(10);
          switch (list[i]['type']) {
            case 'image':
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'gif':
              textObj = {
                type: 'image',
                file: '',
                radius: 0,
                width: 30,
                height: 30,
                alpha: 1,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                backgroundColor: '',
                clickEvent: ''
              };
              list[i] = this.standardization(textObj, list[i]);
              clickEvent = this.clickEvent(list[i]['clickEvent']);
              clickArr.push(clickEvent);
              if (clickEvent['type'] == 'link') {
                html += '<div class="' + newEleid + '" data-i="' + i + '"><a href="' + clickEvent['link'] + '" target="' + clickEvent['target'] + '"><img class="' + newEleid + '_image" src="' + list[i]['file'] + '" style="border:0;"></a></div>'
              } else {
                html += '<div class="' + newEleid + '" data-i="' + i + '"><img class="' + newEleid + '_image" src="' + list[i]['file'] + '" style="border:0;"></div>'
              }
              break;
            case 'text':
              textObj = {
                type: 'text',
                text: '',
                color: '0xFFFFFF',
                size: 14,
                font: this.fontFamily,
                leading: 0,
                alpha: 1,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                backgroundColor: '',
                backAlpha: 1,
                backRadius: 0,
                clickEvent: ''
              };
              list[i] = this.standardization(textObj, list[i]);
              clickEvent = this.clickEvent(list[i]['clickEvent']);
              clickArr.push(clickEvent);
              if (clickEvent['type'] == 'link') {
                html += '<div class="' + newEleid + '" data-i="' + i + '"><div class="' + newEleid + '_bg"></div><div class="' + newEleid + '_text"><a href="' + clickEvent['link'] + '" target="' + clickEvent['target'] + '">' + list[i]['text'] + '</a></div></div>'
              } else {
                html += '<div  class="' + newEleid + '" data-i="' + i + '"><div class="' + newEleid + '_bg"></div><div class="' + newEleid + '_text">' + list[i]['text'] + '</div></div>'
              }
              break;
            default:
              break
          }
          idArr.push(newEleid)
        }
      }
      var objClickEvent = this.clickEvent(obj['clickEvent']);
      eid.innerHTML = '<div class="' + bgid + '"></div><div class="' + bgid + '_c">' + html + '</div>';
      if (objClickEvent['type'] == 'javaScript' || objClickEvent['type'] == 'actionScript') {
        var objClickHandler = function () {
          eval(objClickEvent['fun']);
          thisTemp.sendJS('clickEvent', clk['type'] + '->' + clk['fun'].replace('thisTemp.', '').replace('()', ''))
        };
        this.addListenerInside('click', objClickHandler, this.getByElement(bgid + '_c'))
      }
      this.css(bgid + '_c', {
        position: 'absolute',
        zIndex: '2'
      });
      for (i = 0; i < idArr.length; i++) {
        var clk = clickArr[i];
        if (clk['type'] == 'javaScript' || clk['type'] == 'actionScript') {
          var clickHandler = function () {
            clk = clickArr[this.getAttribute('data-i')];
            eval(clk['fun']);
            thisTemp.sendJS('clickEvent', clk['type'] + '->' + clk['fun'].replace('thisTemp.', '').replace('()', ''))
          };
          this.addListenerInside('click', clickHandler, this.getByElement(idArr[i]))
        }
        switch (list[i]['type']) {
          case 'image':
          case 'png':
          case 'jpg':
          case 'jpeg':
          case 'gif':
            this.css(idArr[i], {
              float: 'left',
              width: list[i]['width'] + 'px',
              height: list[i]['height'] + 'px',
              filter: 'alpha(opacity:' + list[i]['alpha'] + ')',
              opacity: list[i]['alpha'].toString(),
              marginLeft: list[i]['marginLeft'] + 'px',
              marginRight: list[i]['marginRight'] + 'px',
              marginTop: list[i]['marginTop'] + 'px',
              marginBottom: list[i]['marginBottom'] + 'px',
              borderRadius: list[i]['radius'] + 'px',
              cursor: 'pointer'
            });
            this.css(idArr[i] + '_image', {
              width: list[i]['width'] + 'px',
              height: list[i]['height'] + 'px',
              borderRadius: list[i]['radius'] + 'px'
            });
            break;
          case 'text':
            this.css(idArr[i] + '_text', {
              filter: 'alpha(opacity:' + list[i]['alpha'] + ')',
              opacity: list[i]['alpha'].toString(),
              borderRadius: list[i]['radius'] + 'px',
              fontFamily: list[i]['font'],
              fontSize: list[i]['size'] + 'px',
              color: list[i]['color'].replace('0x', '#'),
              lineHeight: list[i]['leading'] > 0 ? list[i]['leading'] + 'px' : '',
              paddingLeft: list[i]['paddingLeft'] + 'px',
              paddingRight: list[i]['paddingRight'] + 'px',
              paddingTop: list[i]['paddingTop'] + 'px',
              paddingBottom: list[i]['paddingBottom'] + 'px',
              whiteSpace: 'nowrap',
              position: 'absolute',
              zIndex: '3',
              cursor: 'pointer'
            });
            this.css(idArr[i], {
              float: 'left',
              width: this.getByElement(idArr[i] + '_text').offsetWidth + 'px',
              height: this.getByElement(idArr[i] + '_text').offsetHeight + 'px',
              marginLeft: list[i]['marginLeft'] + 'px',
              marginRight: list[i]['marginRight'] + 'px',
              marginTop: list[i]['marginTop'] + 'px',
              marginBottom: list[i]['marginBottom'] + 'px'
            });
            this.css(idArr[i] + '_bg', {
              width: this.getByElement(idArr[i] + '_text').offsetWidth + 'px',
              height: this.getByElement(idArr[i] + '_text').offsetHeight + 'px',
              filter: 'alpha(opacity:' + list[i]['backAlpha'] + ')',
              opacity: list[i]['backAlpha'].toString(),
              borderRadius: list[i]['backRadius'] + 'px',
              backgroundColor: list[i]['backgroundColor'].replace('0x', '#'),
              position: 'absolute',
              zIndex: '2'
            });
            break;
          default:
            break
        }
      }
      this.css(bgid, {
        width: this.getByElement(bgid + '_c').offsetWidth + 'px',
        height: this.getByElement(bgid + '_c').offsetHeight + 'px',
        position: 'absolute',
        filter: 'alpha(opacity:' + bgAlpha + ')',
        opacity: bgAlpha,
        backgroundColor: bgColor.replace('0x', '#'),
        borderRadius: obj['backRadius'] + 'px',
        zIndex: '1'
      });
      this.css(eid, {
        width: this.getByElement(bgid).offsetWidth + 'px',
        height: this.getByElement(bgid).offsetHeight + 'px'
      });
      var eidCoor = this.calculationCoor(eid);
      this.css(eid, {
        left: eidCoor['x'] + 'px',
        top: eidCoor['y'] + 'px'
      });
      this.elementArr.push(eid.className);
      return eid
    },
    getElement: function (element) {
      if (this.playerType == 'flashplayer') {
        return this.V.getElement(element)
      }
      var ele = element;
      if (typeof (element) == 'string') {
        ele = this.getByElement(element)
      }
      var coor = this.getCoor(ele);
      return {
        x: coor['x'],
        y: coor['y'],
        width: ele.offsetWidth,
        height: ele.offsetHeight,
        alpha: !this.isUndefined(this.css(ele, 'opacity')) ? parseFloat(this.css(ele, 'opacity'))  : 1
      }
    },
    calculationCoor: function (ele) {
      if (this.playerType == 'flashplayer') {
        return this.V.calculationCoor(ele)
      }
      if (ele == []) {
        return
      }
      var x,
      y,
      position = [
      ];
      var w = this.PD.offsetWidth,
      h = this.PD.offsetHeight;
      var ew = ele.offsetWidth,
      eh = ele.offsetHeight;
      if (!this.isUndefined(this.getDataset(ele, 'x'))) {
        x = this.getDataset(ele, 'x')
      }
      if (!this.isUndefined(this.getDataset(ele, 'y'))) {
        y = this.getDataset(ele, 'y')
      }
      if (!this.isUndefined(this.getDataset(ele, 'position'))) {
        try {
          position = this.getDataset(ele, 'position').toString().split(',')
        } catch (event) {
        }
      }
      if (position.length > 0) {
        position.push(null, null, null, null);
        var i = 0;
        for (i = 0; i < position.length; i++) {
          if (this.isUndefined(position[i]) || position[i] == null || position[i] == 'null' || position[i] == '') {
            position[i] = null
          } else {
            position[i] = parseFloat(position[i])
          }
        }
        if (position[2] == null) {
          switch (position[0]) {
            case 0:
              x = 0;
              break;
            case 1:
              x = parseInt((w - ew) * 0.5);
              break;
            default:
              x = w - ew;
              break
          }
        } else {
          switch (position[0]) {
            case 0:
              x = position[2];
              break;
            case 1:
              x = parseInt(w * 0.5) + position[2];
              break;
            default:
              x = w + position[2];
              break
          }
        }
        if (position[3] == null) {
          switch (position[1]) {
            case 0:
              y = 0;
              break;
            case 1:
              y = parseInt((h - eh) * 0.5);
              break;
            default:
              y = h - eh;
              break
          }
        } else {
          switch (position[1]) {
            case 0:
              y = position[3];
              break;
            case 1:
              y = parseInt(h * 0.5) + position[3];
              break;
            default:
              y = h + position[3];
              break
          }
        }
      } else {
        if (x.substring(x.length - 1, x.length) == '%') {
          x = Math.floor(parseInt(x.substring(0, x.length - 1)) * w * 0.01)
        }
        if (y.substring(y.length - 1, y.length) == '%') {
          y = Math.floor(parseInt(y.substring(0, y.length - 1)) * h * 0.01)
        }
      }
      return {
        x: x,
        y: y
      }
    },
    changeElementCoor: function () {
      for (var i = 0; i < this.elementArr.length; i++) {
        if (this.getByElement(this.elementArr[i]) != []) {
          var c = this.calculationCoor(this.getByElement(this.elementArr[i]));
          if (c['x'] && c['y']) {
            this.css(this.elementArr[i], {
              top: c['y'] + 'px',
              left: c['x'] + 'px'
            })
          }
        }
      }
    },
    tween: function () {
      var Tween = {
        None: {
          easeIn: function (t, b, c, d) {
            return c * t / d + b
          },
          easeOut: function (t, b, c, d) {
            return c * t / d + b
          },
          easeInOut: function (t, b, c, d) {
            return c * t / d + b
          }
        },
        Quadratic: {
          easeIn: function (t, b, c, d) {
            return c * (t /= d) * t + b
          },
          easeOut: function (t, b, c, d) {
            return - c * (t /= d) * (t - 2) + b
          },
          easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return - c / 2 * ((--t) * (t - 2) - 1) + b
          }
        },
        Cubic: {
          easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t + b
          },
          easeOut: function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b
          },
          easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b
          }
        },
        Quartic: {
          easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t * t + b
          },
          easeOut: function (t, b, c, d) {
            return - c * ((t = t / d - 1) * t * t * t - 1) + b
          },
          easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return - c / 2 * ((t -= 2) * t * t * t - 2) + b
          }
        },
        Quintic: {
          easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b
          },
          easeOut: function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b
          },
          easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
          }
        },
        Sine: {
          easeIn: function (t, b, c, d) {
            return - c * Math.cos(t / d * (Math.PI / 2)) + c + b
          },
          easeOut: function (t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b
          },
          easeInOut: function (t, b, c, d) {
            return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
          }
        },
        Exponential: {
          easeIn: function (t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
          },
          easeOut: function (t, b, c, d) {
            return (t == d) ? b + c : c * ( - Math.pow(2, - 10 * t / d) + 1) + b
          },
          easeInOut: function (t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * ( - Math.pow(2, - 10 * --t) + 2) + b
          }
        },
        Circular: {
          easeIn: function (t, b, c, d) {
            return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
          },
          easeOut: function (t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
          },
          easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
          }
        },
        Elastic: {
          easeIn: function (t, b, c, d, a, p) {
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * 0.3;
            if (!a || a < Math.abs(c)) {
              a = c;
              var s = p / 4
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
          },
          easeOut: function (t, b, c, d, a, p) {
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * 0.3;
            if (!a || a < Math.abs(c)) {
              a = c;
              var s = p / 4
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return (a * Math.pow(2, - 10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b)
          },
          easeInOut: function (t, b, c, d, a, p) {
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (0.3 * 1.5);
            if (!a || a < Math.abs(c)) {
              a = c;
              var s = p / 4
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return - 0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, - 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b
          }
        },
        Back: {
          easeIn: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b
          },
          easeOut: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
          },
          easeInOut: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
          }
        },
        Bounce: {
          easeIn: function (t, b, c, d) {
            return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b
          },
          easeOut: function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
              return c * (7.5625 * t * t) + b
            } else if (t < (2 / 2.75)) {
              return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b
            } else if (t < (2.5 / 2.75)) {
              return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b
            } else {
              return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b
            }
          },
          easeInOut: function (t, b, c, d) {
            if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;
             else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
          }
        }
      };
      return Tween
    },
    animate: function (attribute) {
      if (this.playerType == 'flashplayer') {
        return this.V.animate(attribute)
      }
      var thisTemp = this;
      var animateId = 'animate_' + this.randomString();
      var obj = {
        element: null,
        parameter: 'x',
        static: false,
        effect: 'None.easeIn',
        start: null,
        end: null,
        speed: 0,
        overStop: false,
        pauseStop: false,
        callBack: null
      };
      obj = this.standardization(obj, attribute);
      if (obj['element'] == null || obj['speed'] == 0) {
        return false
      }
      var w = this.PD.offsetWidth,
      h = this.PD.offsetHeight;
      var effArr = (obj['effect'] + '.').split('.');
      var tweenFun = this.tween() [effArr[0]][effArr[1]];
      var eleCoor = {
        x: 0,
        y: 0
      };
      if (this.isUndefined(tweenFun)) {
        return false
      }
      var def = this.arrIndexOf(this.elementArr, obj['element'].className);
      if (def > - 1) {
        this.elementArr.splice(def, 1)
      }
      var css = {
      };
      var pm = this.getElement(obj['element']);
      var t = 0;
      var b = 0;
      var c = 0;
      var d = obj['speed'] * 1000;
      var timerTween = null;
      var tweenObj = null;
      var start = obj['start'] == null ? '' : obj['start'].toString();
      var end = obj['end'] == null ? '' : obj['end'].toString();
      switch (obj['parameter']) {
        case 'x':
          if (obj['start'] == null) {
            b = pm['x']
          } else {
            if (start.substring(start.length - 1, start.length) == '%') {
              b = parseInt(start) * w * 0.01
            } else {
              b = parseInt(start)
            }
          }
          if (obj['end'] == null) {
            c = pm['x'] - b
          } else {
            if (end.substring(end.length - 1, end.length) == '%') {
              c = parseInt(end) * w * 0.01 - b
            } else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
              if (typeof (obj['end']) == 'number') {
                c = parseInt(obj['end']) - b
              } else {
                c = parseInt(end)
              }
            } else {
              c = parseInt(end) - b
            }
          }
          break;
        case 'y':
          if (obj['start'] == null) {
            b = pm['y']
          } else {
            if (start.substring(start.length - 1, start.length) == '%') {
              b = parseInt(start) * h * 0.01
            } else {
              b = parseInt(start)
            }
          }
          if (obj['end'] == null) {
            c = pm['y'] - b
          } else {
            if (end.substring(end.length - 1, end.length) == '%') {
              c = parseInt(end) * h * 0.01 - b
            } else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
              if (typeof (obj['end']) == 'number') {
                c = parseInt(obj['end']) - b
              } else {
                c = parseInt(end)
              }
            } else {
              c = parseInt(end) - b
            }
          }
          break;
        case 'alpha':
          if (obj['start'] == null) {
            b = pm['alpha'] * 100
          } else {
            if (start.substring(start.length - 1, start.length) == '%') {
              b = parseInt(obj['start'])
            } else {
              b = parseInt(obj['start'] * 100)
            }
          }
          if (obj['end'] == null) {
            c = pm['alpha'] * 100 - b
          } else {
            if (end.substring(end.length - 1, end.length) == '%') {
              c = parseInt(end) - b
            } else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
              if (typeof (obj['end']) == 'number') {
                c = parseInt(obj['end']) * 100 - b
              } else {
                c = parseInt(obj['end']) * 100
              }
            } else {
              c = parseInt(obj['end']) * 100 - b
            }
          }
          break
      }
      var callBack = function () {
        var index = thisTemp.arrIndexOf(thisTemp.animateElementArray, animateId);
        if (index > - 1) {
          thisTemp.animateArray.splice(index, 1);
          thisTemp.animateElementArray.splice(index, 1)
        }
        index = thisTemp.arrIndexOf(thisTemp.animatePauseArray, animateId);
        if (index > - 1) {
          thisTemp.animatePauseArray.splice(index, 1)
        }
        if (obj['callBack'] != null && obj['element'] && obj['callBack'] != 'callBack' && obj['callBack'] != 'tweenX' && obj['tweenY'] != 'callBack' && obj['callBack'] != 'tweenAlpha') {
          var cb = eval(obj['callBack']);
          cb(obj['element']);
          obj['callBack'] = null
        }
    };
    var stopTween = function () {
      if (timerTween != null) {
        if (timerTween.runing) {
          timerTween.stop()
        }
        timerTween = null
      }
  };
  var tweenX = function () {
    if (t < d) {
      t += 10;
      css = {
        left: Math.ceil(tweenFun(t, b, c, d)) + 'px'
      };
      if (obj['static']) {
        eleCoor = thisTemp.calculationCoor(obj['element']);
        css['top'] = eleCoor['y'] + 'px'
      }
      thisTemp.css(obj['element'], css)
    } else {
      stopTween();
      thisTemp.elementArr.push(obj['element'].className);
      callBack()
    }
};
var tweenY = function () {
  if (t < d) {
    t += 10;
    css = {
      top: Math.ceil(tweenFun(t, b, c, d)) + 'px'
    };
    if (obj['static']) {
      eleCoor = thisTemp.calculationCoor(obj['element']);
      css['left'] = eleCoor['x'] + 'px'
    }
    thisTemp.css(obj['element'], css)
  } else {
    stopTween();
    thisTemp.elementArr.push(obj['element'].className);
    callBack()
  }
};
var tweenAlpha = function () {
if (t < d) {
  t += 10;
  eleCoor = thisTemp.calculationCoor(obj['element']);
  var ap = Math.ceil(tweenFun(t, b, c, d)) * 0.01;
  css = {
    filter: 'alpha(opacity:' + ap + ')',
    opacity: ap.toString()
  };
  if (obj['static']) {
    eleCoor = thisTemp.calculationCoor(obj['element']);
    css['top'] = eleCoor['y'] + 'px';
    css['left'] = eleCoor['x'] + 'px'
  }
  thisTemp.css(obj['element'], css)
} else {
  stopTween();
  thisTemp.elementArr.push(obj['element'].className);
  callBack()
}
};
switch (obj['parameter']) {
case 'x':
tweenObj = tweenX;
break;
case 'y':
tweenObj = tweenY;
break;
case 'alpha':
tweenObj = tweenAlpha;
break;
default:
break
}
timerTween = new thisTemp.timer(10, tweenObj);
timerTween.callBackFunction = callBack;
if (obj['overStop']) {
var mouseOver = function () {
if (timerTween != null && timerTween.runing) {
  timerTween.stop()
}
};
this.addListenerInside('mouseover', mouseOver, obj['element']);
var mouseOut = function () {
var start = true;
if (obj['pauseStop'] && thisTemp.getMetaDate() ['paused']) {
  start = false
}
if (timerTween != null && !timerTween.runing && start) {
  timerTween.start()
}
};
this.addListenerInside('mouseout', mouseOut, obj['element'])
}
this.animateArray.push(timerTween);
this.animateElementArray.push(animateId);
if (obj['pauseStop']) {
this.animatePauseArray.push(animateId)
}
return animateId
},
animateResume: function (id) {
if (this.playerType == 'flashplayer') {
this.V.animateResume(this.isUndefined(id) ? '' : id);
return
}
var arr = [
];
if (id != '' && !this.isUndefined(id) && id != 'pause') {
arr.push(id)
} else {
if (id === 'pause') {
arr = this.animatePauseArray
} else {
arr = this.animateElementArray
}
}
for (var i = 0; i < arr.length; i++) {
var index = this.arrIndexOf(this.animateElementArray, arr[i]);
if (index > - 1) {
this.animateArray[index].start()
}
}
},
animatePause: function (id) {
if (this.playerType == 'flashplayer') {
this.V.animatePause(this.isUndefined(id) ? '' : id);
return
}
var arr = [
];
if (id != '' && !this.isUndefined(id) && id != 'pause') {
arr.push(id)
} else {
if (id === 'pause') {
arr = this.animatePauseArray
} else {
arr = this.animateElementArray
}
}
for (var i = 0; i < arr.length; i++) {
var index = this.arrIndexOf(this.animateElementArray, arr[i]);
if (index > - 1) {
this.animateArray[index].stop()
}
}
},
deleteAnimate: function (id) {
if (this.playerType == 'flashplayer' && this.V) {
try {
this.V.deleteAnimate(id)
} catch (event) {
this.log(event)
}
return
}
var index = this.arrIndexOf(this.animateElementArray, id);
if (index > - 1) {
this.animateArray[index].callBackFunction();
this.animateArray.splice(index, 1);
this.animateElementArray.splice(index, 1)
}
},
deleteElement: function (ele) {
if (this.playerType == 'flashplayer' && this.V) {
try {
this.V.deleteElement(ele)
} catch (event) {
}
return
}
var def = this.arrIndexOf(this.elementArr, ele.className);
if (def > - 1) {
this.elementArr.splice(def, 1)
}
this.deleteAnimate(ele);
this.deleteChild(ele)
},
getByElement: function (obj, parent) {
if (this.isUndefined(parent)) {
parent = document
}
var num = obj.substr(0, 1);
var res = [
];
if (num != '#') {
if (num == '.') {
obj = obj.substr(1, obj.length)
}
if (parent.getElementsByClassName) {
res = parent.getElementsByClassName(obj)
} else {
var reg = new RegExp(' ' + obj + ' ', 'i');
var ele = parent.getElementsByTagName('*');
for (var i = 0; i < ele.length; i++) {
if (reg.test(' ' + ele[i].className + ' ')) {
res.push(ele[i])
}
}
}
if (res.length > 0) {
return res[0]
} else {
return res
}
} else {
if (num == '#') {
obj = obj.substr(1, obj.length)
}
return document.getElementById(obj)
}
},
css: function (elem, attribute, value) {
var i = 0;
var k = '';
if (typeof (elem) == 'object') {
if (!this.isUndefined(typeof (elem.length))) {
for (i = 0; i < elem.length; i++) {
var el;
if (typeof (elem[i]) == 'string') {
el = this.getByElement(elem[i])
} else {
el = elem[i]
}
if (typeof (attribute) != 'object') {
if (!this.isUndefined(value)) {
el.style[attribute] = value
}
} else {
for (k in attribute) {
if (!this.isUndefined(attribute[k])) {
el.style[k] = attribute[k]
}
}
}
}
return
}
}
if (typeof (elem) == 'string') {
elem = this.getByElement(elem)
}
if (typeof (attribute) != 'object') {
if (!this.isUndefined(value)) {
elem.style[attribute] = value
} else {
if (!this.isUndefined(this.getStyle(elem, attribute))) {
return this.getStyle(elem, attribute)
} else {
return false
}
}
} else {
for (k in attribute) {
if (!this.isUndefined(attribute[k])) {
elem.style[k] = attribute[k]
}
}
}
},
getStyle: function (obj, attr) {
if (!this.isUndefined(obj.style[attr])) {
return obj.style[attr]
} else {
if (obj.currentStyle) {
return obj.currentStyle[attr]
} else {
return getComputedStyle(obj, false) [attr]
}
}
},
isUndefined: function (value) {
try {
if (value == 'undefined' || value == undefined) {
return true
}
} catch (event) {
this.log(event)
}
return false
},
addListener: function (name, funName) {
if (name && funName) {
if (this.playerType == 'flashplayer') {
var ff = '';
if (typeof (funName) == 'function') {
ff = this.getParameterNames(funName)
}
this.V.addListener(name, ff);
return
}
var have = false;
for (var i = 0; i < this.listenerJsArr.length; i++) {
var arr = this.listenerJsArr[i];
if (arr[0] == name && arr[1] == funName) {
have = true;
break
}
}
if (!have) {
this.listenerJsArr.push([name,
funName])
}
}
},
removeListener: function (name, funName) {
if (name && funName) {
if (this.playerType == 'flashplayer') {
var ff = '';
if (typeof (funName) == 'function') {
ff = this.getParameterNames(funName)
}
this.V.removeListener(name, ff);
return
}
for (var i = 0; i < this.listenerJsArr.length; i++) {
var arr = this.listenerJsArr[i];
if (arr[0] == name && arr[1] == funName) {
this.listenerJsArr.splice(i, 1);
break
}
}
}
},
addListenerInside: function (e, f, d, t) {
if (this.isUndefined(t)) {
t = false
}
var o = this.V;
if (!this.isUndefined(d)) {
o = d
}
if (o.addEventListener) {
try {
o.addEventListener(e, f, t)
} catch (event) {
}
} else if (o.attachEvent) {
try {
o.attachEvent('on' + e, f)
} catch (event) {
}
} else {
o['on' + e] = f
}
},
removeListenerInside: function (e, f, d, t) {
if (this.isUndefined(t)) {
t = false
}
var o = this.V;
if (!this.isUndefined(d)) {
o = d
}
if (o.removeEventListener) {
try {
this.addNum--;
o.removeEventListener(e, f, t)
} catch (e) {
}
} else if (o.detachEvent) {
try {
o.detachEvent('on' + e, f)
} catch (e) {
}
} else {
o['on' + e] = null
}
},
sendJS: function (name, val) {
var list = this.listenerJsArr;
var obj = {
variable: this.vars['variable']
};
if (this.vars['playerID']) {
obj['playerID'] = this.vars['playerID']
}
for (var i = 0; i < list.length; i++) {
var arr = list[i];
if (arr[0] == name) {
if (val) {
switch (arr[1].length) {
case 1:
arr[1](val);
break;
case 2:
arr[1](val, obj);
break;
default:
arr[1]();
break
}
} else {
switch (arr[1].length) {
case 1:
arr[1](obj);
break;
default:
arr[1]();
break
}
}
}
}
},
getParameterNames: function (fn) {
if (typeof (fn) !== 'function') {
return false
}
var COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var code = fn.toString().replace(COMMENTS, '');
var result = code.slice(code.indexOf(' ') + 1, code.indexOf('('));
return result === null ? false : result
},
getNowDate: function () {
var nowDate = new Date();
var month = nowDate.getMonth() + 1;
var date = nowDate.getDate();
var hours = nowDate.getHours();
var minutes = nowDate.getMinutes();
var seconds = nowDate.getSeconds();
var tMonth = '',
tDate = '',
tHours = '',
tMinutes = '',
tSeconds = '',
tSeconds = (seconds < 10) ? '0' + seconds : seconds + '',
tMinutes = (minutes < 10) ? '0' + minutes : minutes + '',
tHours = (hours < 10) ? '0' + hours : hours + '',
tDate = (date < 10) ? '0' + date : date + '',
tMonth = (month < 10) ? '0' + month : month + '';
return tMonth + '/' + tDate + ' ' + tHours + ':' + tMinutes + ':' + tSeconds
},
formatTime: function (seconds, ishours) {
var tSeconds = '',
tMinutes = '',
tHours = '';
if (isNaN(seconds)) {
seconds = 0
}
var s = Math.floor(seconds % 60),
m = 0,
h = 0;
if (ishours) {
m = Math.floor(seconds / 60) % 60;
h = Math.floor(seconds / 3600)
} else {
m = Math.floor(seconds / 60)
}
tSeconds = (s < 10) ? '0' + s : s + '';
tMinutes = (m > 0) ? ((m < 10) ? '0' + m + ':' : m + ':')  : '00:';
tHours = (h > 0) ? ((h < 10) ? '0' + h + ':' : h + ':')  : '';
if (ishours) {
return tHours + tMinutes + tSeconds
} else {
return tMinutes + tSeconds
}
},
randomString: function (len) {
len = len || 16;
var chars = 'abcdefghijklmnopqrstuvwxyz';
var maxPos = chars.length;
var val = '';
for (i = 0; i < len; i++) {
val += chars.charAt(Math.floor(Math.random() * maxPos))
}
return 'ch' + val
},
getStringLen: function (str) {
var len = 0;
for (var i = 0; i < str.length; i++) {
if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
len += 2
} else {
len++
}
}
return len
},
createXHR: function () {
if (window.XMLHttpRequest) {
return new XMLHttpRequest()
} else if (window.ActiveXObject) {
try {
return new ActiveXObject('Microsoft.XMLHTTP')
} catch (event) {
try {
return new ActiveXObject('Msxml2.XMLHTTP')
} catch (event) {
this.eject(this.errorList[7])
}
}
} else {
this.eject(this.errorList[8])
}
},
ajax: function (cObj) {
var thisTemp = this;
var callback = null;
var obj = {
method: 'get',
dataType: 'json',
charset: 'utf-8',
async: false,
url: '',
data: null,
success: null
};
if (typeof (cObj) != 'object') {
this.eject(this.errorList[9]);
return
}
obj = this.standardization(obj, cObj);
if (obj.dataType === 'json' || obj.dataType === 'text' || obj.dataType === 'html') {
var xhr = this.createXHR();
callback = function () {
if (xhr.status == 200) {
if (obj.success == null) {
return
}
if (obj.dataType === 'json') {
try {
obj.success(eval('(' + xhr.responseText + ')'))
} catch (event) {
obj.success(null)
}
} else {
obj.success(xhr.responseText)
}
} else {
thisTemp.eject(thisTemp.errorList[10], 'Ajax.status:' + xhr.status)
}
};
obj.url = obj.url + '?rand=' + this.randomString(6);
obj.data = this.formatParams(obj.data);
if (obj.method === 'get' && !this.isUndefined(obj.data)) {
obj.url += obj.url.indexOf('?') == - 1 ? '?' + obj.data : '&' + obj.data
}
if (obj.async === true) {
xhr.onreadystatechange = function () {
if (xhr.readyState == 4) {
callback()
}
}
}
xhr.open(obj.method, obj.url, obj.async);
if (obj.method === 'post') {
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('charset', obj['charset']);
xhr.send(obj.data)
} else {
xhr.send(null)
}
if (obj.async === false) {
callback()
}
} else if (obj.dataType === 'jsonp') {
var oHead = document.getElementsByTagName('head') [0];
var oScript = document.createElement('script');
var callbackName = 'callback' + new Date().getTime();
var params = this.formatParams(obj.data) + '&callback=' + callbackName;
callback = obj.success;
oScript.src = obj.url.split('?') + '?' + params;
oHead.insertBefore(oScript, oHead.firstChild);
window[callbackName] = function (json) {
callback(json);
oHead.removeChild(oScript)
}
}
},
loadJs: function (path, success) {
var oHead = document.getElementsByTagName('HEAD').item(0);
var oScript = document.createElement('script');
oScript.type = 'text/javascript';
oScript.src = this.getNewUrl(path);
oHead.appendChild(oScript);
oScript.onload = function () {
success()
}
},
isMsie: function () {
var browser = navigator.appName;
var b_version = navigator.appVersion;
var version = b_version.split(';');
var trim_Version = '';
if (version.length > 1) {
trim_Version = version[1].replace(/[ ]/g, '')
}
if (browser == 'Microsoft Internet Explorer' && (trim_Version == 'MSIE6.0' || trim_Version == 'MSIE7.0' || trim_Version == 'MSIE8.0' || trim_Version == 'MSIE9.0' || trim_Version == 'MSIE10.0')) {
return false
}
return true
},
uploadFlash: function () {
var swf;
if (navigator.userAgent.indexOf('MSIE') > 0) {
try {
var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
return true
} catch (e) {
return false
}
}
if (navigator.userAgent.indexOf('Firefox') > 0) {
swf = navigator.plugins['Shockwave Flash'];
if (swf) {
return true
} else {
return false
}
}
return true
},
supportVideo: function () {
if (!this.isMsie()) {
return false
}
if (!!document.createElement('video').canPlayType) {
var vidTest = document.createElement('video');
var oggTest;
try {
oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"')
} catch (error) {
oggTest = false
}
if (!oggTest) {
var h264Test;
try {
h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
} catch (error) {
h264Test = false
}
if (!h264Test) {
return false
} else {
if (h264Test == 'probably') {
return true
} else {
return false
}
}
} else {
if (oggTest == 'probably') {
return true
} else {
return false
}
}
} else {
return false
}
},
getDataset: function (ele, z) {
try {
return ele.dataset[z]
} catch (error) {
try {
return ele.getAttribute('data-' + z)
} catch (error) {
return false
}
}
},
getObjectById: function (id) {
var x = null;
var y = this.getByElement('#' + id);
var r = 'embed';
if (y && y.nodeName == 'OBJECT') {
if (typeof (y.SetVariable) != 'undefined') {
x = y
} else {
var z = y.getElementsByTagName(r) [0];
if (z) {
x = z
}
}
}
return x
},
formatParams: function (data) {
var arr = [
];
for (var i in data) {
arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]))
}
return arr.join('&')
},
arrSort: function (arr) {
var temp = [
];
for (var i = 0; i < arr.length; i++) {
for (var j = 0; j < arr.length - i; j++) {
if (!this.isUndefined(arr[j + 1]) && arr[j][3] < arr[j + 1][3]) {
temp = arr[j + 1];
arr[j + 1] = arr[j];
arr[j] = temp
}
}
}
return arr
},
getFileExt: function (filepath) {
if (filepath != '' && !this.isUndefined(filepath)) {
if (filepath.indexOf('?') > - 1) {
filepath = filepath.split('?') [0]
}
var pos = '.' + filepath.replace(/.+\./, '');
return pos
}
return ''
},
isMobile: function () {
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android|ios)/i)) {
return true
}
return false
},
isContains: function (str, key) {
return str.indexOf(key) > - 1
},
getNewUrl: function (url) {
if (this.isContains(url, '?')) {
return url += '&' + this.randomString(8) + '=' + this.randomString(8)
} else {
return url += '?' + this.randomString(8) + '=' + this.randomString(8)
}
},
client: function (event) {
var eve = event || window.event;
if (this.isUndefined(eve)) {
eve = {
clientX: 0,
clientY: 0
}
}
return {
x: eve.clientX + (document.documentElement.scrollLeft || this.body.scrollLeft) - this.pdCoor['x'],
y: eve.clientY + (document.documentElement.scrollTop || this.body.scrollTop) - this.pdCoor['y']
}
},
getCoor: function (obj) {
var coor = this.getXY(obj);
return {
x: coor['x'] - this.pdCoor['x'],
y: coor['y'] - this.pdCoor['y']
}
},
getXY: function (obj) {
var parObj = obj;
var left = obj.offsetLeft;
var top = obj.offsetTop;
while (parObj = parObj.offsetParent) {
left += parObj.offsetLeft;
top += parObj.offsetTop
}
return {
x: left,
y: top
}
},
removeChild: function () {
if (this.playerType == 'html5video') {
var i = 0;
var timerArr = [
this.timerError,
this.timerFull,
this.timerTime,
this.timerBuffer,
this.timerClick,
this.timerLoading,
this.timerCBar,
this.timerVCanvas
];
for (i = 0; i < timerArr.length; i++) {
if (timerArr[i] != null) {
if (timerArr[i].runing) {
timerArr[i].stop()
}
timerArr[i] = null
}
}
var ltArr = this.listenerJsArr;
for (i = 0; i < ltArr.length; i++) {
this.removeListener(ltArr[i][0], ltArr[i][1])
}
}
this.playerType == '';
this.V = null;
if (this.showFace) {
this.deleteChild(this.CB['menu'])
}
this.deleteChild(this.PD);
this.CD.innerHTML = ''
},
canvasFill: function (name, path) {
name.beginPath();
for (var i = 0; i < path.length; i++) {
var d = path[i];
if (i > 0) {
name.lineTo(d[0], d[1])
} else {
name.moveTo(d[0], d[1])
}
}
name.closePath();
name.fill()
},
canvasFillRect: function (name, path) {
for (var i = 0; i < path.length; i++) {
var d = path[i];
name.fillRect(d[0], d[1], d[2], d[3])
}
},
deleteChild: function (f) {
var def = this.arrIndexOf(this.elementArr, f.className);
if (def > - 1) {
this.elementArr.splice(def, 1)
}
var childs = f.childNodes;
for (var i = childs.length - 1; i >= 0; i--) {
f.removeChild(childs[i])
}
if (f && f != null && f.parentNode) {
try {
if (f.parentNode) {
f.parentNode.removeChild(f)
}
} catch (event) {
}
}
},
getProportionCoor: function (stageW, stageH, vw, vh) {
var w = 0,
h = 0,
x = 0,
y = 0;
if (stageW / stageH < vw / vh) {
w = stageW;
h = w * vh / vw
} else {
h = stageH;
w = h * vw / vh
}
x = (stageW - w) * 0.5;
y = (stageH - h) * 0.5;
return {
width: parseInt(w),
height: parseInt(h),
x: parseInt(x),
y: parseInt(y)
}
},
parseSrtSubtitles: function (srt) {
var subtitles = [
];
var textSubtitles = [
];
var i = 0;
var arrs = srt.split('\n');
var arr = [
];
var delHtmlTag = function (str) {
return str.replace(/<[^>]+>/g, '')
};
for (i = 0; i < arrs.length; i++) {
if (arrs[i].replace(/\s/g, '').length > 0) {
arr.push(arrs[i])
} else {
if (arr.length > 0) {
textSubtitles.push(arr)
}
arr = [
]
}
}
for (i = 0; i < textSubtitles.length; ++i) {
var textSubtitle = textSubtitles[i];
if (textSubtitle.length >= 2) {
var sn = textSubtitle[0];
var startTime = this.toSeconds(this.trim(textSubtitle[1].split(' --> ') [0]));
var endTime = this.toSeconds(this.trim(textSubtitle[1].split(' --> ') [1]));
var content = [
delHtmlTag(textSubtitle[2])
];
if (textSubtitle.length > 2) {
for (var j = 3; j < textSubtitle.length; j++) {
content.push(delHtmlTag(textSubtitle[j]))
}
}
var subtitle = {
sn: sn,
startTime: startTime,
endTime: endTime,
content: content
};
subtitles.push(subtitle)
}
}
return subtitles
},
timer: function (time, fun, number) {
var thisTemp = this;
this.time = 10;
this.fun = null;
this.timeObj = null;
this.number = 0;
this.numberTotal = null;
this.runing = false;
this.startFun = function () {
thisTemp.number++;
thisTemp.fun();
if (thisTemp.numberTotal != null && thisTemp.number >= thisTemp.numberTotal) {
thisTemp.stop()
}
};
this.start = function () {
if (!thisTemp.runing) {
thisTemp.runing = true;
thisTemp.timeObj = window.setInterval(thisTemp.startFun, time)
}
};
this.stop = function () {
if (thisTemp.runing) {
thisTemp.runing = false;
window.clearInterval(thisTemp.timeObj);
thisTemp.timeObj = null
}
};
if (time) {
this.time = time
}
if (fun) {
this.fun = fun
}
if (number) {
this.numberTotal = number
}
this.start()
},
toSeconds: function (t) {
var s = 0;
if (t) {
var p = t.split(':');
for (i = 0; i < p.length; i++) {
s = s * 60 + parseFloat(p[i].replace(',', '.'))
}
}
return s
},
standardization: function (o, n) {
var h = {
};
var k;
for (k in o) {
h[k] = o[k]
}
for (k in n) {
var type = typeof (h[k]);
switch (type) {
case 'number':
h[k] = parseFloat(n[k]);
break;
default:
h[k] = n[k];
break
}
}
return h
},
arrIndexOf: function (arr, key) {
var re = new RegExp(key, [
''
]);
return (arr.toString().replace(re, '┢').replace(/[^,┢]/g, '')).indexOf('┢')
},
trim: function (str) {
if (str != '') {
return str.replace(/(^\s*)|(\s*$)/g, '')
}
return ''
},
log: function (val) {
try {
console.log(val)
} catch (e) {
}
},
eject: function (er, val) {
if (!this.vars['debug']) {
return
}
var errorVal = er[1];
if (!this.isUndefined(val)) {
errorVal = errorVal.replace('[error]', val)
}
var value = 'error ' + er[0] + ':' + errorVal;
try {
this.log(value)
} catch (e) {
}
}
};
window.ckplayer = ckplayer
}) ();

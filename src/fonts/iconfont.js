;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M931.008 518.656 545.984 133.504c-21.056-20.992-55.104-20.992-76.096 0L84.8 518.656C70.784 532.608 75.456 544 95.296 544h107.648v286.976c0 29.76 24.128 53.888 53.824 53.888h161.408v-215.296h179.456v215.296h215.168V544h107.712C940.352 544 945.088 532.608 931.008 518.656z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M574.9248 574.9248c-81.0496 81.1008-174.9504 158.6176-212.0704 121.4464-53.1456-53.0944-85.8624-99.3792-203.008-5.2736s-27.1872 156.8768 24.32 208.384c59.392 59.3408 280.7808 3.1232 499.6608-215.7056 218.7776-218.8288 275.0976-440.2688 215.6544-499.6608-51.456-51.5072-114.176-141.4144-208.3328-24.32s-47.872 149.8624 5.2736 203.008c37.0176 37.1712-40.448 131.0208-121.4976 212.1216z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M855.8592 627.570688c-5.310464-73.131008-54.381568-134.397952-82.747392-166.086656 3.93728-9.219072 13.518848-62.58176-23.48032-98.992128 0.059392-0.873472 0.059392-1.739776 0.059392-2.586624 0-143.633408-102.234112-247.017472-230.51264-247.487488-128.299008 0.47104-230.529024 103.855104-230.529024 247.487488 0 0.846848-0.012288 1.713152 0.049152 2.586624-36.999168 36.410368-27.400192 89.773056-23.48032 98.992128-28.347392 31.688704-77.42464 92.955648-82.745344 166.086656-0.959488 19.224576 2.013184 47.227904 11.404288 59.6736 11.4432 15.176704 42.852352-3.047424 65.313792-51.535872 6.249472 22.463488 20.673536 56.756224 53.311488 100.283392-54.621184 12.465152-70.201344 66.338816-51.825664 95.787008 12.959744 20.75136 42.631168 37.818368 93.765632 37.818368 90.978304 0 131.155968-24.451072 149.087232-41.47712 3.654656-3.714048 8.926208-5.505024 15.648768-5.51936 6.700032 0.014336 11.983872 1.805312 15.62624 5.51936 17.933312 17.026048 58.119168 41.47712 149.076992 41.47712 51.152896 0 80.80384-17.067008 93.763584-37.818368 18.3808-29.448192 2.803712-83.32288-51.803136-95.787008 32.638976-43.528192 47.066112-77.819904 53.311488-100.283392 22.467584 48.488448 53.870592 66.711552 65.324032 51.535872C853.858304 674.798592 856.835072 646.795264 855.8592 627.570688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-demo25" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M875.392 153.472 153.92 153.472c-48 0-87.296 39.296-87.296 87.296l0 542.592c0 48 39.296 87.296 87.296 87.296l721.472 0c48 0 87.296-39.296 87.296-87.296L962.688 240.704C962.688 192.704 923.392 153.472 875.392 153.472L875.392 153.472zM873.344 330.816 514.688 555.008 156.032 330.816 156.032 241.152l358.72 224.192 358.592-224.192L873.344 330.816 873.344 330.816zM873.344 330.816"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-download" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M858.4 432 656 432 656 0l-14.4 0L366.4 0 352 0l0 432L149.6 432c-11.2 0-14.4 5.6-7.2 14.4l348 412c7.2 8 19.2 8.8 26.4 0l348.8-412C872.8 437.6 869.6 432 858.4 432z"  ></path>' +
    '' +
    '<path d="M0 964l1024 0 0 60-1024 0 0-60Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-github" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M402.262528 694.878208q0 22.85568-7.1424 46.854144t-24.569856 43.425792-41.42592 19.427328-41.42592-19.427328-24.569856-43.425792-7.1424-46.854144 7.1424-46.854144 24.569856-43.425792 41.42592-19.427328 41.42592 19.427328 24.569856 43.425792 7.1424 46.854144zm365.69088 0q0 22.85568-7.1424 46.854144t-24.569856 43.425792-41.42592 19.427328-41.42592-19.427328-24.569856-43.425792-7.1424-46.854144 7.1424-46.854144 24.569856-43.425792 41.42592-19.427328 41.42592 19.427328 24.569856 43.425792 7.1424 46.854144zm91.42272 0q0-68.56704-39.426048-116.563968t-106.850304-47.996928q-23.427072 0-111.42144 11.999232-40.568832 6.285312-89.708544 6.285312t-89.708544-6.285312q-86.851584-11.999232-111.42144-11.999232-67.424256 0-106.850304 47.996928t-39.426048 116.563968q0 50.282496 18.284544 87.708672t46.282752 58.853376 69.709824 34.28352 79.99488 16.856064 85.137408 3.999744l95.993856 0q46.854144 0 85.137408-3.999744t79.99488-16.856064 69.709824-34.28352 46.282752-58.853376 18.284544-87.708672zm127.991808-100.564992q0 118.278144-34.854912 189.130752-21.712896 43.997184-60.281856 75.995136t-80.566272 49.139712-97.13664 27.14112-97.993728 12.570624-95.422464 2.571264q-44.568576 0-81.137664-1.714176t-84.28032-7.1424-87.13728-17.14176-78.280704-29.426688-69.138432-46.282752-49.139712-65.71008q-35.426304-70.281216-35.426304-189.130752 0-135.419904 77.709312-226.271232-15.427584-46.854144-15.427584-97.13664 0-66.281472 29.140992-124.563456 61.710336 0 108.56448 22.569984t107.993088 70.566912q83.994624-19.99872 176.560128-19.99872 84.566016 0 159.98976 18.284544 59.99616-46.854144 106.850304-69.138432t107.993088-22.284288q29.140992 58.281984 29.140992 124.563456 0 49.711104-15.427584 95.993856 77.709312 91.42272 77.709312 227.414016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
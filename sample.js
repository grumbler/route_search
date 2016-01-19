// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
    var baseUrl = "https://www.google.com/maps/dir/Invalidenstra%C3%9Fe+115,+D-10115+Berlin,+Germany/";
    var appendix = ",+Berlin,+Deutschland/";
    var newURL = baseUrl + encodeURIComponent(info.selectionText) + appendix;
    chrome.tabs.create({ url: newURL });
}

chrome.contextMenus.create({
    "title": "Find the route!",
    "contexts":["selection"],
    "onclick": genericOnClick
});

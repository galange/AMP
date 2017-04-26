function showrecentposts(b) {
    document.write("<ul>");
    for (var a = 0; a < b.feed.entry.length; a++) {
        for (var c = 0; c < b.feed.entry[a].link.length && "alternate" != b.feed.entry[a].link[c].rel; c++);
        document.write("<li><a href=" + ("'" + b.feed.entry[a].link[c].href + "'") + '" target="_blank">' + b.feed.entry[a].title.$t + "</a> </li>")
    }
    document.write("</ul>")
};
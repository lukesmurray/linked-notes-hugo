local function hasGifClass(elem)
    if elem.classes == nil then
        return false
    end
    for _,v in pairs(elem.classes) do
        if v == "gif" then
            return true
        end
        return false
    end
end

if FORMAT:match("html") then
    function Image (elem)
        -- display videos as gifs
        if hasGifClass(elem) then
            elem.attr.attributes.autoplay = ""
            elem.attr.attributes.loop = ""
            elem.attr.attributes.muted = ""
            elem.attr.attributes.playsinline = ""
        else
        -- lazy load images
            elem.attr.attributes.loading = "lazy"
        end


        return elem
    end
end
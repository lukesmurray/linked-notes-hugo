-- function for labeling internal and external links
local function isExternal(str)
    return str:match("^https?://")
end

local function starts_with(str, start)
    return str:sub(1, #start) == start
 end
 
 local function ends_with(str, ending)
    return ending == "" or str:sub(-#ending) == ending
 end

local function isWikilink(elem) 
    linkContentStr = pandoc.utils.stringify(elem.content)
    return starts_with(linkContentStr, "[[")  and ends_with(linkContentStr, "]]")
end

function Link (elem)
    -- label external links and internal links
    if isExternal(elem.target) then
        elem.classes[#elem.classes+1] = 'external-link'
    else
        elem.classes[#elem.classes+1] = 'internal-link'
    end

    -- if we find a wikilink
    if isWikilink(elem) then
        -- remove the braces
        elem.content = {pandoc.Str(string.sub(pandoc.utils.stringify(elem.content), 3, -3))}
    end

    return elem
end
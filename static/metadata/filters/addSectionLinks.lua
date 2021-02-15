local function isempty(s)
    return s == nil or s == ''
  end

function Header(elem)
    -- as long as the header has an identifier
    if not isempty(elem.identifier)  then
        -- create a link to the header
        headerLink = pandoc.Link("", "#" .. elem.identifier)
        headerLink.attr = {class = 'sectionLink'}
        -- create the new header content with the link prepended
        headerContent = elem.content:clone()
        headerContent:insert(1, headerLink)
        --  create the new header
        newHeader = pandoc.Header(elem.level, headerContent, elem.attr)
        return newHeader
    end
    return nil
end
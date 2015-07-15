@@ import import.spec

=========================================
headline        css     h1
paragraph       css     p
linklist        css     ul
linklist-item-* css     ul li
color-box       css     .color-box
logo            css     img
=========================================

@ Test the headline/paragraph distance | near
----------------------------------------------------
@@ if
headline
    visible
    text contains: UNDEFINED | Galen
@@ do
headline
    near: paragraph > 15px top
    "Comment for the report" near: paragraph < 30px top
    % near: paragraph > 30px top
@@ end

@ Test the linklist items alignment | alignment
----------------------------------------------------
# linklist-*
#     aligned vertically left: linklist-item-1

# linklist-item-#
#     aligned vertically left: linklist-item-1

# linklist-item-1, linklist-item-2, linklist-item-3, linklist-item-4, linklist-item-5
#     aligned vertically left: linklist-item-1

[1-5]
linklist-item-@
    aligned vertically left: linklist-item-1

@ Test the text content of the headline | text
----------------------------------------------------
headline
    text is: UNDEFINED | Galen
    text starts: UNDEFINED
    text ends: Galen
    text contains: NED | Ga
    text matches: ^[a-zA-Z]+ \| [a-zA-Z]+$
    text lowercase is: undefined | galen
    text lowercase starts: undefined
    text lowercase ends: galen
    text lowercase contains: ned | ga
    text lowercase matches: ^[a-z]+ \| [a-z]+$

@ Test the color proportions of the color box | color
----------------------------------------------------
color-box
    color scheme: ~ 19% #adff2f, ~ 49% #ff00ff, ~ 29% #00bfff

@ Test for image changes | image
----------------------------------------------------
logo
    # image: file ../../build/img/logo_expected.jpg, error 3%
    image: file ../../build/img/logo_used.jpg, error 3%
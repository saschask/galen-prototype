=========================================
headline        css     h1
paragraph       css     p
linklist        css     ul
linklist-item-* css     ul li
=========================================

@ Test the headline | tag1
----------------------------------------------------
headline
    height: ~ 62px

@ Test the paragraph | tag1, tag2
----------------------------------------------------
paragraph
    width: 50 to 60% of screen/width

@ Test the linklist items | *
----------------------------------------------------
linklist-item-3
    width: < 100% of screen/width

@ ^ | ^
----------------------------------------------------
linklist-item-4
    width: < 100% of screen/width
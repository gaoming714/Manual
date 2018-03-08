guake terminal
======



------


### install

apt install guake


### keyboard shorcuts

guake
ctrl + shift + tab


### settings

Solarized Dark
Source code pro simibold 11

### edit font-end

vi /usr/shar/guake

delete edge
from
> <widget class="GtkFixed" id="fixed1">
>    <property name="visible">True</property>
> </widget>
> <widget class="GtkFixed" id="fixed2">
>    <property name="visible">True</property>
> </widget>
to
> <widget class="GtkFixed" id="fixed1">
>    <property name="visible">False</property>
> </widget>
> <widget class="GtkFixed" id="fixed2">
>    <property name="visible">False</property>
> </widget>



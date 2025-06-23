/*:
 * @plugindesc v4.2.0 A flexible HUD with mouse-over and click effects.
 * @author OM-Devv & AI
 * @target MZ
 * @url 
 *
 * @help SRD_SimpleHUD.js
 *
 * This plugin displays a highly customizable Heads-Up Display (HUD) on the
 * map screen, featuring up to nine meters with an automatic layout system.
 *
 * --- NEW in v4.2.0 ---
 * - Clickable Meters: Meters can now trigger a configurable Common Event
 *   when clicked. See the "Interactivity" section for each meter.
 *
 * --- NEW in v4.1.1 ---
 * - Fixed a critical logic flaw in the Text Color Triggers. The system
 *   now correctly evaluates all triggers to find the most specific match.
 *
 * --- PLUGIN COMMANDS ---
 *  - Show HUD / Hide HUD / Toggle HUD:
 *    These control the visibility of the ENTIRE HUD container. Individual
 *    meter visibility is controlled by their assigned switches.
 *
 * @param ---General Settings---
 *
 * @param toggleSwitchId
 * @text Main HUD Toggle Switch
 * @desc The switch that toggles the entire HUD on/off.
 * @type switch
 * @default 10
 *
 * @param hudOpacity
 * @text HUD Opacity
 * @desc The opacity of the gauge elements. 0 (transparent) to 255 (opaque).
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param ---Layout Settings---
 *
 * @param anchorPaddingX
 * @text Anchor Padding X
 * @parent ---Layout Settings---
 * @desc The horizontal space (in pixels) from the screen edge for anchored bars.
 * @type number
 * @default 10
 *
 * @param anchorPaddingY
 * @text Anchor Padding Y
 * @parent ---Layout Settings---
 * @desc The vertical space (in pixels) from the screen edge for anchored bars.
 * @type number
 * @default 10
 *
 * @param verticalSpacing
 * @text Vertical Spacing
 * @parent ---Layout Settings---
 * @desc The vertical gap (in pixels) between bars stacked in the same anchor.
 * @type number
 * @default 8
 *
 * @param ---Meter 1 Settings---
 * @param meter1Enabled
 * @text Enable This Meter
 * @parent ---Meter 1 Settings---
 * @type boolean
 * @default true
 *
 * @param meter1LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 1 Settings---
 * @desc Choose a screen corner to automatically position this bar. Overrides X/Y.
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter1X
 * @text X Position (Custom Only)
 * @parent ---Meter 1 Settings---
 * @type number
 * @default 24
 *
 * @param meter1Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 1 Settings---
 * @type number
 * @default 24
 *
 * @param meter1ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 1 Settings---
 * @type switch
 * @default 0
 * @desc If > 0, this switch must be ON for the meter to be visible.
 *
 * @param meter1VariableId
 * @text Current Value Variable
 * @parent ---Meter 1 Settings---
 * @type variable
 * @default 11
 *
 * @param meter1MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 1 Settings---
 * @desc Set to 0 to use dynamic max value.
 * @type variable
 * @default 0
 *
 * @param meter1Width
 * @text Width
 * @parent ---Meter 1 Settings---
 * @type number
 * @default 200
 *
 * @param meter1Height
 * @text Height
 * @parent ---Meter 1 Settings---
 * @type number
 * @default 20
 *
 * @param meter1GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 1 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default vertical
 *
 * @param meter1Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 1 Settings---
 * @type string
 * @default #ff8888
 *
 * @param meter1Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 1 Settings---
 * @type string
 * @default #cc4444
 *
 * @param meter1BorderColor
 * @text Border Color
 * @parent ---Meter 1 Settings---
 * @type string
 * @desc Overrides global border color. Leave blank for default.
 * @default
 *
 * @param meter1ShowText
 * @text Show Text
 * @parent ---Meter 1 Settings---
 * @type boolean
 * @default true
 *
 * @param meter1TextSide
 * @text Text Side
 * @parent ---Meter 1 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter1TextFormat
 * @text Text Format
 * @parent ---Meter 1 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter1TextPrefix
 * @text Text Prefix
 * @parent ---Meter 1 Settings---
 * @type string
 * @default
 *
 * @param meter1TextSuffix
 * @text Text Suffix
 * @parent ---Meter 1 Settings---
 * @type string
 * @default
 *
 * @param meter1TextX
 * @text Text X Offset
 * @parent ---Meter 1 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter1TextY
 * @text Text Y Offset
 * @parent ---Meter 1 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter1TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 1 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter1TextColor
 * @text Text Color
 * @parent ---Meter 1 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 1 Text Color Triggers---
 * @parent ---Meter 1 Settings---
 * @desc Optional triggers to change the text color. The most specific trigger will be used.
 *
 * @param meter1TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 1 Text Color Triggers---
 * @type boolean
 * @desc Enable the first color trigger.
 * @default false
 *
 * @param meter1TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The variable to check. If 0, uses this meter's Current Value Variable.
 * @type variable
 * @default 0
 *
 * @param meter1TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 1 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter1TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 1 Text Color Triggers---
 * @desc Variable ID for the threshold. If > 0, this overrides the fixed value below.
 * @type variable
 * @default 0
 *
 * @param meter1TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The fixed threshold value to compare against.
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter1TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The text color to use when this trigger is active.
 * @type string
 * @default #ff6666
 *
 * @param meter1TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 1 Text Color Triggers---
 * @type boolean
 * @desc Enable the second color trigger.
 * @default false
 *
 * @param meter1TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The variable to check. If 0, uses this meter's Current Value Variable.
 * @type variable
 * @default 0
 *
 * @param meter1TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 1 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter1TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 1 Text Color Triggers---
 * @desc Variable ID for the threshold. If > 0, this overrides the fixed value below.
 * @type variable
 * @default 0
 *
 * @param meter1TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The fixed threshold value to compare against.
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter1TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The text color to use when this trigger is active.
 * @type string
 * @default #ffcc66
 *
 * @param meter1TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 1 Text Color Triggers---
 * @type boolean
 * @desc Enable the third color trigger.
 * @default false
 *
 * @param meter1TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The variable to check. If 0, uses this meter's Current Value Variable.
 * @type variable
 * @default 0
 *
 * @param meter1TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 1 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter1TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 1 Text Color Triggers---
 * @desc Variable ID for the threshold. If > 0, this overrides the fixed value below.
 * @type variable
 * @default 0
 *
 * @param meter1TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The fixed threshold value to compare against.
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter1TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 1 Text Color Triggers---
 * @desc The text color to use when this trigger is active.
 * @type string
 * @default #ffff66
 *
 * @param meter1TextOpacity
 * @text Text Opacity
 * @parent ---Meter 1 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter1FontFace
 * @text Font Face
 * @parent ---Meter 1 Settings---
 * @type string
 * @desc Leave blank for default game font.
 * @default
 *
 * @param meter1TextSize
 * @text Text Size
 * @parent ---Meter 1 Settings---
 * @type number
 * @min 0
 * @desc Set to 0 for default game font size.
 * @default 0
 *
 * @param ---Meter 1 Interactivity---
 * @parent ---Meter 1 Settings---
 *
 * @param meter1ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 1 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Meter 2 Settings---
 * @param meter2Enabled
 * @text Enable This Meter
 * @parent ---Meter 2 Settings---
 * @type boolean
 * @default true
 *
 * @param meter2LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 2 Settings---
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter2X
 * @text X Position (Custom Only)
 * @parent ---Meter 2 Settings---
 * @type number
 * @default 24
 *
 * @param meter2Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 2 Settings---
 * @type number
 * @default 74
 *
 * @param meter2ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 2 Settings---
 * @type switch
 * @default 0
 *
 * @param meter2VariableId
 * @text Current Value Variable
 * @parent ---Meter 2 Settings---
 * @type variable
 * @default 12
 *
 * @param meter2MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 2 Settings---
 * @type variable
 * @default 0
 *
 * @param meter2Width
 * @text Width
 * @parent ---Meter 2 Settings---
 * @type number
 * @default 200
 *
 * @param meter2Height
 * @text Height
 * @parent ---Meter 2 Settings---
 * @type number
 * @default 20
 *
 * @param meter2GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 2 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default vertical
 *
 * @param meter2Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 2 Settings---
 * @type string
 * @default #88aaff
 *
 * @param meter2Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 2 Settings---
 * @type string
 * @default #4466cc
 *
 * @param meter2BorderColor
 * @text Border Color
 * @parent ---Meter 2 Settings---
 * @type string
 * @desc Overrides global border color. Leave blank for default.
 * @default
 *
 * @param meter2ShowText
 * @text Show Text
 * @parent ---Meter 2 Settings---
 * @type boolean
 * @default true
 *
 * @param meter2TextSide
 * @text Text Side
 * @parent ---Meter 2 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter2TextFormat
 * @text Text Format
 * @parent ---Meter 2 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter2TextPrefix
 * @text Text Prefix
 * @parent ---Meter 2 Settings---
 * @type string
 * @default
 *
 * @param meter2TextSuffix
 * @text Text Suffix
 * @parent ---Meter 2 Settings---
 * @type string
 * @default
 *
 * @param meter2TextX
 * @text Text X Offset
 * @parent ---Meter 2 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter2TextY
 * @text Text Y Offset
 * @parent ---Meter 2 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter2TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 2 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter2TextColor
 * @text Text Color
 * @parent ---Meter 2 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 2 Text Color Triggers---
 * @parent ---Meter 2 Settings---
 *
 * @param meter2TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 2 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter2TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 2 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter2TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 2 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter2TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 2 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter2TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 2 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter2TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 2 Text Color Triggers---
 * @type string
 * @default #ff6666
 *
 * @param meter2TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 2 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter2TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 2 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter2TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 2 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter2TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 2 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter2TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 2 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter2TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 2 Text Color Triggers---
 * @type string
 * @default #ffcc66
 *
 * @param meter2TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 2 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter2TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 2 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter2TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 2 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter2TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 2 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter2TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 2 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter2TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 2 Text Color Triggers---
 * @type string
 * @default #ffff66
 *
 * @param meter2TextOpacity
 * @text Text Opacity
 * @parent ---Meter 2 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter2FontFace
 * @text Font Face
 * @parent ---Meter 2 Settings---
 * @type string
 * @default
 *
 * @param meter2TextSize
 * @text Text Size
 * @parent ---Meter 2 Settings---
 * @type number
 * @min 0
 * @default 0
 *
 * @param ---Meter 2 Interactivity---
 * @parent ---Meter 2 Settings---
 *
 * @param meter2ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 2 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Meter 3 Settings---
 * @param meter3Enabled
 * @text Enable This Meter
 * @parent ---Meter 3 Settings---
 * @type boolean
 * @default false
 *
 * @param meter3LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 3 Settings---
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter3X
 * @text X Position (Custom Only)
 * @parent ---Meter 3 Settings---
 * @type number
 * @default 24
 *
 * @param meter3Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 3 Settings---
 * @type number
 * @default 124
 *
 * @param meter3ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 3 Settings---
 * @type switch
 * @default 0
 *
 * @param meter3VariableId
 * @text Current Value Variable
 * @parent ---Meter 3 Settings---
 * @type variable
 * @default 13
 *
 * @param meter3MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 3 Settings---
 * @type variable
 * @default 0
 *
 * @param meter3Width
 * @text Width
 * @parent ---Meter 3 Settings---
 * @type number
 * @default 150
 *
 * @param meter3Height
 * @text Height
 * @parent ---Meter 3 Settings---
 * @type number
 * @default 16
 *
 * @param meter3GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 3 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default vertical
 *
 * @param meter3Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 3 Settings---
 * @type string
 * @default #aaffaa
 *
 * @param meter3Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 3 Settings---
 * @type string
 * @default #55cc55
 *
 * @param meter3BorderColor
 * @text Border Color
 * @parent ---Meter 3 Settings---
 * @type string
 * @default
 *
 * @param meter3ShowText
 * @text Show Text
 * @parent ---Meter 3 Settings---
 * @type boolean
 * @default false
 *
 * @param meter3TextSide
 * @text Text Side
 * @parent ---Meter 3 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter3TextFormat
 * @text Text Format
 * @parent ---Meter 3 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter3TextPrefix
 * @text Text Prefix
 * @parent ---Meter 3 Settings---
 * @type string
 * @default
 *
 * @param meter3TextSuffix
 * @text Text Suffix
 * @parent ---Meter 3 Settings---
 * @type string
 * @default
 *
 * @param meter3TextX
 * @text Text X Offset
 * @parent ---Meter 3 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter3TextY
 * @text Text Y Offset
 * @parent ---Meter 3 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter3TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 3 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter3TextColor
 * @text Text Color
 * @parent ---Meter 3 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 3 Text Color Triggers---
 * @parent ---Meter 3 Settings---
 *
 * @param meter3TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 3 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter3TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 3 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter3TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 3 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter3TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 3 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter3TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 3 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter3TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 3 Text Color Triggers---
 * @type string
 * @default #ff6666
 *
 * @param meter3TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 3 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter3TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 3 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter3TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 3 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter3TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 3 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter3TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 3 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter3TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 3 Text Color Triggers---
 * @type string
 * @default #ffcc66
 *
 * @param meter3TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 3 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter3TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 3 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter3TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 3 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter3TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 3 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter3TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 3 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter3TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 3 Text Color Triggers---
 * @type string
 * @default #ffff66
 *
 * @param meter3TextOpacity
 * @text Text Opacity
 * @parent ---Meter 3 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter3FontFace
 * @text Font Face
 * @parent ---Meter 3 Settings---
 * @type string
 * @default
 *
 * @param meter3TextSize
 * @text Text Size
 * @parent ---Meter 3 Settings---
 * @type number
 * @min 0
 * @default 0
 *
 * @param ---Meter 3 Interactivity---
 * @parent ---Meter 3 Settings---
 *
 * @param meter3ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 3 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Meter 4 Settings---
 * @param meter4Enabled
 * @text Enable This Meter
 * @parent ---Meter 4 Settings---
 * @type boolean
 * @default false
 *
 * @param meter4LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 4 Settings---
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter4X
 * @text X Position (Custom Only)
 * @parent ---Meter 4 Settings---
 * @type number
 * @default 24
 *
 * @param meter4Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 4 Settings---
 * @type number
 * @default 150
 *
 * @param meter4ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 4 Settings---
 * @type switch
 * @default 0
 *
 * @param meter4VariableId
 * @text Current Value Variable
 * @parent ---Meter 4 Settings---
 * @type variable
 * @default 14
 *
 * @param meter4MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 4 Settings---
 * @type variable
 * @default 0
 *
 * @param meter4Width
 * @text Width
 * @parent ---Meter 4 Settings---
 * @type number
 * @default 150
 *
 * @param meter4Height
 * @text Height
 * @parent ---Meter 4 Settings---
 * @type number
 * @default 16
 *
 * @param meter4GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 4 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default vertical
 *
 * @param meter4Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 4 Settings---
 * @type string
 * @default #eeccff
 *
 * @param meter4Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 4 Settings---
 * @type string
 * @default #cc88ff
 *
 * @param meter4BorderColor
 * @text Border Color
 * @parent ---Meter 4 Settings---
 * @type string
 * @default
 *
 * @param meter4ShowText
 * @text Show Text
 * @parent ---Meter 4 Settings---
 * @type boolean
 * @default false
 *
 * @param meter4TextSide
 * @text Text Side
 * @parent ---Meter 4 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter4TextFormat
 * @text Text Format
 * @parent ---Meter 4 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter4TextPrefix
 * @text Text Prefix
 * @parent ---Meter 4 Settings---
 * @type string
 * @default
 *
 * @param meter4TextSuffix
 * @text Text Suffix
 * @parent ---Meter 4 Settings---
 * @type string
 * @default
 *
 * @param meter4TextX
 * @text Text X Offset
 * @parent ---Meter 4 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter4TextY
 * @text Text Y Offset
 * @parent ---Meter 4 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter4TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 4 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter4TextColor
 * @text Text Color
 * @parent ---Meter 4 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 4 Text Color Triggers---
 * @parent ---Meter 4 Settings---
 *
 * @param meter4TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 4 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter4TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 4 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter4TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 4 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter4TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 4 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter4TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 4 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter4TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 4 Text Color Triggers---
 * @type string
 * @default #ff6666
 *
 * @param meter4TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 4 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter4TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 4 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter4TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 4 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter4TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 4 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter4TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 4 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter4TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 4 Text Color Triggers---
 * @type string
 * @default #ffcc66
 *
 * @param meter4TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 4 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter4TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 4 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter4TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 4 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter4TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 4 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter4TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 4 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter4TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 4 Text Color Triggers---
 * @type string
 * @default #ffff66
 *
 * @param meter4TextOpacity
 * @text Text Opacity
 * @parent ---Meter 4 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter4FontFace
 * @text Font Face
 * @parent ---Meter 4 Settings---
 * @type string
 * @default
 *
 * @param meter4TextSize
 * @text Text Size
 * @parent ---Meter 4 Settings---
 * @type number
 * @min 0
 * @default 0
 *
 * @param ---Meter 4 Interactivity---
 * @parent ---Meter 4 Settings---
 *
 * @param meter4ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 4 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Meter 5 Settings---
 * @param meter5Enabled
 * @text Enable This Meter
 * @parent ---Meter 5 Settings---
 * @type boolean
 * @default false
 *
 * @param meter5LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 5 Settings---
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter5X
 * @text X Position (Custom Only)
 * @parent ---Meter 5 Settings---
 * @type number
 * @default 24
 *
 * @param meter5Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 5 Settings---
 * @type number
 * @default 180
 *
 * @param meter5ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 5 Settings---
 * @type switch
 * @default 0
 *
 * @param meter5VariableId
 * @text Current Value Variable
 * @parent ---Meter 5 Settings---
 * @type variable
 * @default 15
 *
 * @param meter5MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 5 Settings---
 * @type variable
 * @default 0
 *
 * @param meter5Width
 * @text Width
 * @parent ---Meter 5 Settings---
 * @type number
 * @default 150
 *
 * @param meter5Height
 * @text Height
 * @parent ---Meter 5 Settings---
 * @type number
 * @default 16
 *
 * @param meter5GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 5 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default horizontal
 *
 * @param meter5Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 5 Settings---
 * @type string
 * @default #ffffaa
 *
 * @param meter5Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 5 Settings---
 * @type string
 * @default #cccc55
 *
 * @param meter5BorderColor
 * @text Border Color
 * @parent ---Meter 5 Settings---
 * @type string
 * @default
 *
 * @param meter5ShowText
 * @text Show Text
 * @parent ---Meter 5 Settings---
 * @type boolean
 * @default false
 *
 * @param meter5TextSide
 * @text Text Side
 * @parent ---Meter 5 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter5TextFormat
 * @text Text Format
 * @parent ---Meter 5 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter5TextPrefix
 * @text Text Prefix
 * @parent ---Meter 5 Settings---
 * @type string
 * @default
 *
 * @param meter5TextSuffix
 * @text Text Suffix
 * @parent ---Meter 5 Settings---
 * @type string
 * @default
 *
 * @param meter5TextX
 * @text Text X Offset
 * @parent ---Meter 5 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter5TextY
 * @text Text Y Offset
 * @parent ---Meter 5 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter5TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 5 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter5TextColor
 * @text Text Color
 * @parent ---Meter 5 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 5 Text Color Triggers---
 * @parent ---Meter 5 Settings---
 *
 * @param meter5TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 5 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter5TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 5 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter5TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 5 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter5TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 5 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter5TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 5 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter5TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 5 Text Color Triggers---
 * @type string
 * @default #ff6666
 *
 * @param meter5TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 5 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter5TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 5 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter5TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 5 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter5TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 5 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter5TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 5 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter5TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 5 Text Color Triggers---
 * @type string
 * @default #ffcc66
 *
 * @param meter5TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 5 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter5TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 5 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter5TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 5 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter5TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 5 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter5TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 5 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter5TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 5 Text Color Triggers---
 * @type string
 * @default #ffff66
 *
 * @param meter5TextOpacity
 * @text Text Opacity
 * @parent ---Meter 5 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter5FontFace
 * @text Font Face
 * @parent ---Meter 5 Settings---
 * @type string
 * @default
 *
 * @param meter5TextSize
 * @text Text Size
 * @parent ---Meter 5 Settings---
 * @type number
 * @min 0
 * @default 0
 *
 * @param ---Meter 5 Interactivity---
 * @parent ---Meter 5 Settings---
 *
 * @param meter5ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 5 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Meter 6 Settings---
 * @param meter6Enabled
 * @text Enable This Meter
 * @parent ---Meter 6 Settings---
 * @type boolean
 * @default false
 *
 * @param meter6LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 6 Settings---
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter6X
 * @text X Position (Custom Only)
 * @parent ---Meter 6 Settings---
 * @type number
 * @default 24
 *
 * @param meter6Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 6 Settings---
 * @type number
 * @default 206
 *
 * @param meter6ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 6 Settings---
 * @type switch
 * @default 0
 *
 * @param meter6VariableId
 * @text Current Value Variable
 * @parent ---Meter 6 Settings---
 * @type variable
 * @default 16
 *
 * @param meter6MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 6 Settings---
 * @type variable
 * @default 0
 *
 * @param meter6Width
 * @text Width
 * @parent ---Meter 6 Settings---
 * @type number
 * @default 150
 *
 * @param meter6Height
 * @text Height
 * @parent ---Meter 6 Settings---
 * @type number
 * @default 16
 *
 * @param meter6GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 6 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default horizontal
 *
 * @param meter6Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 6 Settings---
 * @type string
 * @default #cccccc
 *
 * @param meter6Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 6 Settings---
 * @type string
 * @default #888888
 *
 * @param meter6BorderColor
 * @text Border Color
 * @parent ---Meter 6 Settings---
 * @type string
 * @default
 *
 * @param meter6ShowText
 * @text Show Text
 * @parent ---Meter 6 Settings---
 * @type boolean
 * @default false
 *
 * @param meter6TextSide
 * @text Text Side
 * @parent ---Meter 6 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter6TextFormat
 * @text Text Format
 * @parent ---Meter 6 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter6TextPrefix
 * @text Text Prefix
 * @parent ---Meter 6 Settings---
 * @type string
 * @default
 *
 * @param meter6TextSuffix
 * @text Text Suffix
 * @parent ---Meter 6 Settings---
 * @type string
 * @default
 *
 * @param meter6TextX
 * @text Text X Offset
 * @parent ---Meter 6 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter6TextY
 * @text Text Y Offset
 * @parent ---Meter 6 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter6TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 6 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter6TextColor
 * @text Text Color
 * @parent ---Meter 6 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 6 Text Color Triggers---
 * @parent ---Meter 6 Settings---
 *
 * @param meter6TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 6 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter6TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 6 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter6TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 6 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter6TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 6 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter6TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 6 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter6TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 6 Text Color Triggers---
 * @type string
 * @default #ff6666
 *
 * @param meter6TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 6 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter6TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 6 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter6TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 6 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter6TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 6 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter6TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 6 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter6TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 6 Text Color Triggers---
 * @type string
 * @default #ffcc66
 *
 * @param meter6TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 6 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter6TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 6 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter6TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 6 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter6TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 6 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter6TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 6 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter6TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 6 Text Color Triggers---
 * @type string
 * @default #ffff66
 *
 * @param meter6TextOpacity
 * @text Text Opacity
 * @parent ---Meter 6 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter6FontFace
 * @text Font Face
 * @parent ---Meter 6 Settings---
 * @type string
 * @default
 *
 * @param meter6TextSize
 * @text Text Size
 * @parent ---Meter 6 Settings---
 * @type number
 * @min 0
 * @default 0
 *
 * @param ---Meter 6 Interactivity---
 * @parent ---Meter 6 Settings---
 *
 * @param meter6ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 6 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Meter 7 Settings---
 * @param meter7Enabled
 * @text Enable This Meter
 * @parent ---Meter 7 Settings---
 * @type boolean
 * @default false
 *
 * @param meter7LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 7 Settings---
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter7X
 * @text X Position (Custom Only)
 * @parent ---Meter 7 Settings---
 * @type number
 * @default 24
 *
 * @param meter7Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 7 Settings---
 * @type number
 * @default 230
 *
 * @param meter7ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 7 Settings---
 * @type switch
 * @default 0
 *
 * @param meter7VariableId
 * @text Current Value Variable
 * @parent ---Meter 7 Settings---
 * @type variable
 * @default 17
 *
 * @param meter7MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 7 Settings---
 * @type variable
 * @default 0
 *
 * @param meter7Width
 * @text Width
 * @parent ---Meter 7 Settings---
 * @type number
 * @default 150
 *
 * @param meter7Height
 * @text Height
 * @parent ---Meter 7 Settings---
 * @type number
 * @default 16
 *
 * @param meter7GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 7 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default horizontal
 *
 * @param meter7Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 7 Settings---
 * @type string
 * @default #cccccc
 *
 * @param meter7Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 7 Settings---
 * @type string
 * @default #888888
 *
 * @param meter7BorderColor
 * @text Border Color
 * @parent ---Meter 7 Settings---
 * @type string
 * @default
 *
 * @param meter7ShowText
 * @text Show Text
 * @parent ---Meter 7 Settings---
 * @type boolean
 * @default false
 *
 * @param meter7TextSide
 * @text Text Side
 * @parent ---Meter 7 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter7TextFormat
 * @text Text Format
 * @parent ---Meter 7 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter7TextPrefix
 * @text Text Prefix
 * @parent ---Meter 7 Settings---
 * @type string
 * @default
 *
 * @param meter7TextSuffix
 * @text Text Suffix
 * @parent ---Meter 7 Settings---
 * @type string
 * @default
 *
 * @param meter7TextX
 * @text Text X Offset
 * @parent ---Meter 7 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter7TextY
 * @text Text Y Offset
 * @parent ---Meter 7 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter7TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 7 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter7TextColor
 * @text Text Color
 * @parent ---Meter 7 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 7 Text Color Triggers---
 * @parent ---Meter 7 Settings---
 *
 * @param meter7TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 7 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter7TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 7 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter7TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 7 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter7TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 7 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter7TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 7 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter7TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 7 Text Color Triggers---
 * @type string
 * @default #ff6666
 *
 * @param meter7TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 7 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter7TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 7 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter7TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 7 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter7TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 7 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter7TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 7 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter7TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 7 Text Color Triggers---
 * @type string
 * @default #ffcc66
 *
 * @param meter7TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 7 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter7TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 7 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter7TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 7 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter7TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 7 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter7TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 7 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter7TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 7 Text Color Triggers---
 * @type string
 * @default #ffff66
 *
 * @param meter7TextOpacity
 * @text Text Opacity
 * @parent ---Meter 7 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter7FontFace
 * @text Font Face
 * @parent ---Meter 7 Settings---
 * @type string
 * @default
 *
 * @param meter7TextSize
 * @text Text Size
 * @parent ---Meter 7 Settings---
 * @type number
 * @min 0
 * @default 0
 *
 * @param ---Meter 7 Interactivity---
 * @parent ---Meter 7 Settings---
 *
 * @param meter7ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 7 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Meter 8 Settings---
 * @param meter8Enabled
 * @text Enable This Meter
 * @parent ---Meter 8 Settings---
 * @type boolean
 * @default false
 *
 * @param meter8LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 8 Settings---
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter8X
 * @text X Position (Custom Only)
 * @parent ---Meter 8 Settings---
 * @type number
 * @default 24
 *
 * @param meter8Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 8 Settings---
 * @type number
 * @default 254
 *
 * @param meter8ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 8 Settings---
 * @type switch
 * @default 0
 *
 * @param meter8VariableId
 * @text Current Value Variable
 * @parent ---Meter 8 Settings---
 * @type variable
 * @default 18
 *
 * @param meter8MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 8 Settings---
 * @type variable
 * @default 0
 *
 * @param meter8Width
 * @text Width
 * @parent ---Meter 8 Settings---
 * @type number
 * @default 150
 *
 * @param meter8Height
 * @text Height
 * @parent ---Meter 8 Settings---
 * @type number
 * @default 16
 *
 * @param meter8GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 8 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default horizontal
 *
 * @param meter8Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 8 Settings---
 * @type string
 * @default #cccccc
 *
 * @param meter8Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 8 Settings---
 * @type string
 * @default #888888
 *
 * @param meter8BorderColor
 * @text Border Color
 * @parent ---Meter 8 Settings---
 * @type string
 * @default
 *
 * @param meter8ShowText
 * @text Show Text
 * @parent ---Meter 8 Settings---
 * @type boolean
 * @default false
 *
 * @param meter8TextSide
 * @text Text Side
 * @parent ---Meter 8 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter8TextFormat
 * @text Text Format
 * @parent ---Meter 8 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter8TextPrefix
 * @text Text Prefix
 * @parent ---Meter 8 Settings---
 * @type string
 * @default
 *
 * @param meter8TextSuffix
 * @text Text Suffix
 * @parent ---Meter 8 Settings---
 * @type string
 * @default
 *
 * @param meter8TextX
 * @text Text X Offset
 * @parent ---Meter 8 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter8TextY
 * @text Text Y Offset
 * @parent ---Meter 8 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter8TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 8 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter8TextColor
 * @text Text Color
 * @parent ---Meter 8 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 8 Text Color Triggers---
 * @parent ---Meter 8 Settings---
 *
 * @param meter8TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 8 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter8TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 8 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter8TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 8 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter8TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 8 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter8TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 8 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter8TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 8 Text Color Triggers---
 * @type string
 * @default #ff6666
 *
 * @param meter8TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 8 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter8TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 8 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter8TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 8 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter8TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 8 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter8TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 8 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter8TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 8 Text Color Triggers---
 * @type string
 * @default #ffcc66
 *
 * @param meter8TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 8 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter8TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 8 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter8TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 8 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter8TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 8 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter8TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 8 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter8TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 8 Text Color Triggers---
 * @type string
 * @default #ffff66
 *
 * @param meter8TextOpacity
 * @text Text Opacity
 * @parent ---Meter 8 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter8FontFace
 * @text Font Face
 * @parent ---Meter 8 Settings---
 * @type string
 * @default
 *
 * @param meter8TextSize
 * @text Text Size
 * @parent ---Meter 8 Settings---
 * @type number
 * @min 0
 * @default 0
 *
 * @param ---Meter 8 Interactivity---
 * @parent ---Meter 8 Settings---
 *
 * @param meter8ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 8 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Meter 9 Settings---
 * @param meter9Enabled
 * @text Enable This Meter
 * @parent ---Meter 9 Settings---
 * @type boolean
 * @default false
 *
 * @param meter9LayoutAnchor
 * @text Layout Anchor
 * @parent ---Meter 9 Settings---
 * @type select
 * @option Custom Position
 * @value custom
 * @option Top Left
 * @value topLeft
 * @option Top Right
 * @value topRight
 * @option Bottom Left
 * @value bottomLeft
 * @option Bottom Right
 * @value bottomRight
 * @default topLeft
 *
 * @param meter9X
 * @text X Position (Custom Only)
 * @parent ---Meter 9 Settings---
 * @type number
 * @default 24
 *
 * @param meter9Y
 * @text Y Position (Custom Only)
 * @parent ---Meter 9 Settings---
 * @type number
 * @default 278
 *
 * @param meter9ToggleSwitchId
 * @text Toggle Switch
 * @parent ---Meter 9 Settings---
 * @type switch
 * @default 0
 *
 * @param meter9VariableId
 * @text Current Value Variable
 * @parent ---Meter 9 Settings---
 * @type variable
 * @default 19
 *
 * @param meter9MaxVariableId
 * @text Max Value Variable
 * @parent ---Meter 9 Settings---
 * @type variable
 * @default 0
 *
 * @param meter9Width
 * @text Width
 * @parent ---Meter 9 Settings---
 * @type number
 * @default 150
 *
 * @param meter9Height
 * @text Height
 * @parent ---Meter 9 Settings---
 * @type number
 * @default 16
 *
 * @param meter9GradientOrientation
 * @text Gradient Orientation
 * @parent ---Meter 9 Settings---
 * @type select
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @default horizontal
 *
 * @param meter9Color1
 * @text Color 1 (Gradient Left/Top)
 * @parent ---Meter 9 Settings---
 * @type string
 * @default #cccccc
 *
 * @param meter9Color2
 * @text Color 2 (Gradient Right/Bottom)
 * @parent ---Meter 9 Settings---
 * @type string
 * @default #888888
 *
 * @param meter9BorderColor
 * @text Border Color
 * @parent ---Meter 9 Settings---
 * @type string
 * @default
 *
 * @param meter9ShowText
 * @text Show Text
 * @parent ---Meter 9 Settings---
 * @type boolean
 * @default false
 *
 * @param meter9TextSide
 * @text Text Side
 * @parent ---Meter 9 Settings---
 * @type select
 * @option Inside the bar
 * @value inside
 * @option Left of the bar
 * @value left
 * @option Right of the bar
 * @value right
 * @default inside
 *
 * @param meter9TextFormat
 * @text Text Format
 * @parent ---Meter 9 Settings---
 * @type select
 * @option Current Value Only
 * @value current
 * @option Current / Max
 * @value current/max
 * @default current/max
 *
 * @param meter9TextPrefix
 * @text Text Prefix
 * @parent ---Meter 9 Settings---
 * @type string
 * @default
 *
 * @param meter9TextSuffix
 * @text Text Suffix
 * @parent ---Meter 9 Settings---
 * @type string
 * @default
 *
 * @param meter9TextX
 * @text Text X Offset
 * @parent ---Meter 9 Settings---
 * @type number
 * @min -9999
 * @default 0
 *
 * @param meter9TextY
 * @text Text Y Offset
 * @parent ---Meter 9 Settings---
 * @type number
 * @min -9999
 * @default -4
 *
 * @param meter9TextAlign
 * @text Text Align (Inside Only)
 * @parent ---Meter 9 Settings---
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param meter9TextColor
 * @text Text Color
 * @parent ---Meter 9 Settings---
 * @type string
 * @default #ffffff
 *
 * @param ---Meter 9 Text Color Triggers---
 * @parent ---Meter 9 Settings---
 *
 * @param meter9TextColorTrigger1Enabled
 * @text Enable Trigger 1
 * @parent ---Meter 9 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter9TextColorTrigger1VariableId
 * @text Trigger 1 Variable
 * @parent ---Meter 9 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter9TextColorTrigger1Type
 * @text Trigger 1 Comparison
 * @parent ---Meter 9 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter9TextColorTrigger1ThresholdVarId
 * @text Trigger 1 Threshold (from Variable)
 * @parent ---Meter 9 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter9TextColorTrigger1ThresholdValue
 * @text Trigger 1 Threshold (Fixed)
 * @parent ---Meter 9 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 25
 *
 * @param meter9TextColorTrigger1Color
 * @text Trigger 1 Color
 * @parent ---Meter 9 Text Color Triggers---
 * @type string
 * @default #ff6666
 *
 * @param meter9TextColorTrigger2Enabled
 * @text Enable Trigger 2
 * @parent ---Meter 9 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter9TextColorTrigger2VariableId
 * @text Trigger 2 Variable
 * @parent ---Meter 9 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter9TextColorTrigger2Type
 * @text Trigger 2 Comparison
 * @parent ---Meter 9 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter9TextColorTrigger2ThresholdVarId
 * @text Trigger 2 Threshold (from Variable)
 * @parent ---Meter 9 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter9TextColorTrigger2ThresholdValue
 * @text Trigger 2 Threshold (Fixed)
 * @parent ---Meter 9 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 50
 *
 * @param meter9TextColorTrigger2Color
 * @text Trigger 2 Color
 * @parent ---Meter 9 Text Color Triggers---
 * @type string
 * @default #ffcc66
 *
 * @param meter9TextColorTrigger3Enabled
 * @text Enable Trigger 3
 * @parent ---Meter 9 Text Color Triggers---
 * @type boolean
 * @default false
 *
 * @param meter9TextColorTrigger3VariableId
 * @text Trigger 3 Variable
 * @parent ---Meter 9 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter9TextColorTrigger3Type
 * @text Trigger 3 Comparison
 * @parent ---Meter 9 Text Color Triggers---
 * @type select
 * @option Value is LESS THAN threshold
 * @value less
 * @option Value is GREATER THAN threshold
 * @value greater
 * @option Value is EQUAL TO threshold
 * @value equal
 * @default less
 *
 * @param meter9TextColorTrigger3ThresholdVarId
 * @text Trigger 3 Threshold (from Variable)
 * @parent ---Meter 9 Text Color Triggers---
 * @type variable
 * @default 0
 *
 * @param meter9TextColorTrigger3ThresholdValue
 * @text Trigger 3 Threshold (Fixed)
 * @parent ---Meter 9 Text Color Triggers---
 * @type number
 * @min -99999999
 * @default 75
 *
 * @param meter9TextColorTrigger3Color
 * @text Trigger 3 Color
 * @parent ---Meter 9 Text Color Triggers---
 * @type string
 * @default #ffff66
 *
 * @param meter9TextOpacity
 * @text Text Opacity
 * @parent ---Meter 9 Settings---
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param meter9FontFace
 * @text Font Face
 * @parent ---Meter 9 Settings---
 * @type string
 * @default
 *
 * @param meter9TextSize
 * @text Text Size
 * @parent ---Meter 9 Settings---
 * @type number
 * @min 0
 * @default 0
 *
 * @param ---Meter 9 Interactivity---
 * @parent ---Meter 9 Settings---
 *
 * @param meter9ClickCommonEventId
 * @text On-Click Common Event
 * @parent ---Meter 9 Interactivity---
 * @desc The Common Event to run when this meter is clicked. Set to 0 for no effect.
 * @type common_event
 * @default 0
 *
 * @param ---Style Settings---
 *
 * @param borderColor
 * @text Border Color
 * @parent ---Style Settings---
 * @desc The default border color for all meters.
 * @type string
 * @default #ffffff
 *
 * @param borderThickness
 * @text Border Thickness
 * @parent ---Style Settings---
 * @type number
 * @min 0
 * @default 2
 *
 * @param borderOpacity
 * @text Border Opacity
 * @parent ---Style Settings---
 * @desc The opacity of the meter borders. 0 (transparent) to 255 (opaque).
 * @type number
 * @min 0
 * @max 255
 * @default 255
 *
 * @param gaugeBackColor
 * @text Gauge Background Color
 * @parent ---Style Settings---
 * @type string
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param enableGaugeShadow
 * @text Enable Gauge Shadow
 * @parent ---Style Settings---
 * @desc Adds a subtle shadow inside the gauge for a 3D effect.
 * @type boolean
 * @default true
 *
 * @param gaugeShadowPosition
 * @text Gauge Shadow Position
 * @parent ---Style Settings---
 * @desc Where to draw the gauge shadow.
 * @type select
 * @option Top
 * @value top
 * @option Bottom
 * @value bottom
 * @default top
 *
 * @param ---Mouse & Touch---
 *
 * @param enableMouseGlow
 * @text Enable Mouse-Over Glow
 * @parent ---Mouse & Touch---
 * @desc Show a highlight effect when the mouse is over a meter.
 * @type boolean
 * @default true
 *
 * @param glowColor
 * @text Glow Color
 * @parent ---Mouse & Touch---
 * @desc The color of the mouse-over highlight effect.
 * @type string
 * @default rgba(255, 255, 255, 0.7)
 *
 * @param glowThickness
 * @text Glow Thickness
 * @parent ---Mouse & Touch---
 * @desc The thickness (in pixels) of the mouse-over highlight.
 * @type number
 * @min 1
 * @default 2
 *
 * @command showHud
 * @text Show HUD
 * @desc Manually shows the entire HUD.
 *
 * @command hideHud
 * @text Hide HUD
 * @desc Manually hides the entire HUD.
 *
 * @command toggleHud
 * @text Toggle HUD
 * @desc Toggles the entire HUD's visibility.
 */

(() => {
    "use strict";

    const pluginName = "SRD_SimpleHUD";
    const params = PluginManager.parameters(pluginName);

    const parseMeterParams = (i) => {
        if (params[`meter${i}Enabled`] !== 'true') return null;
        
        const meterConfig = {
            id: i,
            anchor: params[`meter${i}LayoutAnchor`],
            toggleSwitchId: Number(params[`meter${i}ToggleSwitchId`]),
            variableId: Number(params[`meter${i}VariableId`]),
            maxVariableId: Number(params[`meter${i}MaxVariableId`]),
            x: Number(params[`meter${i}X`]), y: Number(params[`meter${i}Y`]),
            width: Number(params[`meter${i}Width`]), height: Number(params[`meter${i}Height`]),
            gradientOrientation: params[`meter${i}GradientOrientation`],
            color1: params[`meter${i}Color1`], color2: params[`meter${i}Color2`],
            borderColor: params[`meter${i}BorderColor`] || "",
            showText: params[`meter${i}ShowText`] === 'true',
            textFormat: params[`meter${i}TextFormat`],
            textPrefix: params[`meter${i}TextPrefix`],
            textSuffix: params[`meter${i}TextSuffix`],
            textX: Number(params[`meter${i}TextX`]),
            textY: Number(params[`meter${i}TextY`]),
            textAlign: params[`meter${i}TextAlign`],
            textColor: params[`meter${i}TextColor`],
            textSide: params[`meter${i}TextSide`],
            fontFace: params[`meter${i}FontFace`],
            textOpacity: Number(params[`meter${i}TextOpacity`]),
            textSize: Number(params[`meter${i}TextSize`]) || 0,
            clickCommonEventId: Number(params[`meter${i}ClickCommonEventId`]) || 0,
        };

        const triggers = [];
        for (let j = 1; j <= 3; j++) {
            if (params[`meter${i}TextColorTrigger${j}Enabled`] === 'true') {
                triggers.push({
                    variableId: Number(params[`meter${i}TextColorTrigger${j}VariableId`]) || 0,
                    type: params[`meter${i}TextColorTrigger${j}Type`],
                    thresholdVarId: Number(params[`meter${i}TextColorTrigger${j}ThresholdVarId`]) || 0,
                    thresholdValue: Number(params[`meter${i}TextColorTrigger${j}ThresholdValue`]),
                    color: params[`meter${i}TextColorTrigger${j}Color`]
                });
            }
        }
        meterConfig.textColorTriggers = triggers;
        
        return meterConfig;
    };

    const pMainToggleSwitchId = Number(params.toggleSwitchId);
    const pHudOpacity = Number(params.hudOpacity);
    const pBorderColor = params.borderColor;
    const pBorderThickness = Number(params.borderThickness);
    const pBorderOpacity = Number(params.borderOpacity);
    const pGaugeBackColor = params.gaugeBackColor;
    const pEnableGaugeShadow = params.enableGaugeShadow === 'true';
    const pGaugeShadowPosition = params.gaugeShadowPosition;
    const pAnchorPaddingX = Number(params.anchorPaddingX);
    const pAnchorPaddingY = Number(params.anchorPaddingY);
    const pVerticalSpacing = Number(params.verticalSpacing);
    const pEnableMouseGlow = params.enableMouseGlow === 'true';
    const pGlowColor = params.glowColor;
    const pGlowThickness = Number(params.glowThickness);

    const pMeters = Array.from({ length: 9 }, (_, i) => parseMeterParams(i + 1)).filter(p => p);

    const hexToRgba = (hex, alpha) => {
        if (!hex.startsWith("#")) return hex; // Already a named color or rgba
        if (hex.length === 4) {
            hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
        }
        const r = parseInt(hex.slice(1, 3), 16) || 0;
        const g = parseInt(hex.slice(3, 5), 16) || 0;
        const b = parseInt(hex.slice(5, 7), 16) || 0;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    PluginManager.registerCommand(pluginName, "showHud", () => $gameSwitches.setValue(pMainToggleSwitchId, true));
    PluginManager.registerCommand(pluginName, "hideHud", () => $gameSwitches.setValue(pMainToggleSwitchId, false));
    PluginManager.registerCommand(pluginName, "toggleHud", () => $gameSwitches.setValue(pMainToggleSwitchId, !$gameSwitches.value(pMainToggleSwitchId)));

    const _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.call(this);
        this._srdHudMaxValues = this._srdHudMaxValues || {};
    };
    Game_System.prototype.getSrdHudMaxValue = function(variableId) {
        return this._srdHudMaxValues[variableId] || 0;
    };
    Game_System.prototype.setSrdHudMaxValue = function(variableId, value) {
        this._srdHudMaxValues[variableId] = value;
    };

    function Window_Hud() { this.initialize(...arguments); }
    Window_Hud.prototype = Object.create(Window_Base.prototype);
    Window_Hud.prototype.constructor = Window_Hud;

    Window_Hud.prototype.initialize = function(rect) {
        Window_Base.prototype.initialize.call(this, rect);
        this.opacity = 0;
        this.contents.paintOpacity = pHudOpacity;
        this._lastValues = {};
        this._lastMaxValues = {};
        this._lastSwitchStates = {};
        this._hoveredMeterId = null;
        this.refresh();
    };

    Window_Hud.prototype.loadWindowskin = function() { this.windowskin = null; };

    Window_Hud.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        this.updateVisibility();
        if (this.visible) {
            this.updateStateAndRefresh();
            this.updateClickHandling();
        }
    };

    Window_Hud.prototype.updateVisibility = function() { this.visible = $gameSwitches.value(pMainToggleSwitchId); };

    Window_Hud.prototype.isMeterVisible = function(meter) {
        return meter.toggleSwitchId > 0 ? $gameSwitches.value(meter.toggleSwitchId) : true;
    };

    Window_Hud.prototype.updateClickHandling = function() {
        if (TouchInput.isTriggered() && this._hoveredMeterId !== null) {
            const clickedMeter = pMeters.find(m => m.id === this._hoveredMeterId);
            if (clickedMeter && clickedMeter.clickCommonEventId > 0) {
                $gameTemp.reserveCommonEvent(clickedMeter.clickCommonEventId);
            }
        }
    };

    Window_Hud.prototype.updateStateAndRefresh = function() {
        let needsRedraw = false;

        if (pEnableMouseGlow) {
            const lastHoverId = this._hoveredMeterId;
            this._hoveredMeterId = this._getHoveredMeterId();
            if (this._hoveredMeterId !== lastHoverId) {
                needsRedraw = true;
            }
        }

        for (const meter of pMeters) {
            const meterId = meter.id;
            const isVisible = this.isMeterVisible(meter);
            if (this._lastSwitchStates[meterId] !== isVisible) {
                this._lastSwitchStates[meterId] = isVisible;
                needsRedraw = true;
            }
            if (!isVisible) continue;

            const currentValue = $gameVariables.value(meter.variableId);
            let maxValue = (meter.maxVariableId > 0) ?
                $gameVariables.value(meter.maxVariableId) :
                $gameSystem.getSrdHudMaxValue(meter.variableId);

            if (meter.maxVariableId <= 0 && currentValue > maxValue) {
                maxValue = currentValue;
                $gameSystem.setSrdHudMaxValue(meter.variableId, maxValue);
            }
            
            if (this._lastValues[meterId] !== currentValue || this._lastMaxValues[meterId] !== maxValue) {
                this._lastValues[meterId] = currentValue;
                this._lastMaxValues[meterId] = maxValue;
                needsRedraw = true;
            }
        }
        if (needsRedraw) {
            this.refresh();
        }
    };
    
    Window_Hud.prototype._getHoveredMeterId = function() {
        if (typeof TouchInput === "undefined" || !TouchInput.x) {
            return null;
        }
        const mouseX = TouchInput.x;
        const mouseY = TouchInput.y;
        const padding = this.padding;
        const visibleMeters = pMeters.filter(meter => this.isMeterVisible(meter));
    
        for (const meter of visibleMeters.slice().reverse()) {
            const meterScreenX = meter.x + this.x + padding;
            const meterScreenY = meter.y + this.y + padding;
            
            if (
                mouseX >= meterScreenX && mouseX < meterScreenX + meter.width &&
                mouseY >= meterScreenY && mouseY < meterScreenY + meter.height
            ) {
                return meter.id;
            }
        }
        return null;
    };

    Window_Hud.prototype.refresh = function() {
        this.contents.clear();
        this.processMeterAnchors();
        for (const meter of pMeters) {
            if (this.isMeterVisible(meter)) {
                const current = this._lastValues[meter.id] || $gameVariables.value(meter.variableId);
                const max = this._lastMaxValues[meter.id] || (meter.maxVariableId > 0 ? $gameVariables.value(meter.maxVariableId) : $gameSystem.getSrdHudMaxValue(meter.variableId)) || current || 1;
                this.drawHudMeter(meter, current, max);
                this.drawHudText(meter, current, max);
            }
        }
    };

    Window_Hud.prototype.processMeterAnchors = function() {
        const groups = { topLeft: [], topRight: [], bottomLeft: [], bottomRight: [] };
        const visibleMeters = pMeters.filter(meter => this.isMeterVisible(meter));

        for (const meter of visibleMeters) {
            if (groups[meter.anchor]) {
                groups[meter.anchor].push(meter);
            }
        }

        for (const anchor in groups) {
            const meterGroup = groups[anchor];
            if (meterGroup.length === 0) continue;

            let currentY;
            if (anchor.includes("bottom")) {
                const totalHeight = meterGroup.reduce((acc, meter) => acc + meter.height, 0);
                const totalSpacing = (meterGroup.length - 1) * pVerticalSpacing;
                currentY = this.innerHeight - pAnchorPaddingY - totalHeight - totalSpacing;
            } else {
                currentY = pAnchorPaddingY;
            }

            for (const meter of meterGroup) {
                if (anchor.includes("Right")) {
                    meter.x = this.innerWidth - pAnchorPaddingX - meter.width;
                } else {
                    meter.x = pAnchorPaddingX;
                }
                meter.y = currentY;
                currentY += meter.height + pVerticalSpacing;
            }
        }
    };

    Window_Hud.prototype.drawHudMeter = function(params, currentValue, maxValue) {
        const x = params.x;
        const y = params.y;
        const width = params.width;
        const height = params.height;
        const thickness = pBorderThickness;
        
        if (pEnableMouseGlow && this._hoveredMeterId === params.id) {
            const gx = x - pGlowThickness;
            const gy = y - pGlowThickness;
            const gw = width + pGlowThickness * 2;
            const gh = height + pGlowThickness * 2;
            this.contents.fillRect(gx, gy, gw, pGlowThickness, pGlowColor);
            this.contents.fillRect(gx, gy + gh - pGlowThickness, gw, pGlowThickness, pGlowColor);
            this.contents.fillRect(gx, gy + pGlowThickness, pGlowThickness, gh - pGlowThickness * 2, pGlowColor);
            this.contents.fillRect(gx + gw - pGlowThickness, gy + pGlowThickness, pGlowThickness, gh - pGlowThickness * 2, pGlowColor);
        }
        
        const finalBorderColor = params.borderColor || pBorderColor;
        const borderRgbaColor = hexToRgba(finalBorderColor, pBorderOpacity / 255);

        this.contents.paintOpacity = pHudOpacity;

        if (thickness > 0) {
            this.contents.fillRect(x, y, width, thickness, borderRgbaColor);
            this.contents.fillRect(x, y + height - thickness, width, thickness, borderRgbaColor);
            this.contents.fillRect(x, y + thickness, thickness, height - (thickness * 2), borderRgbaColor);
            this.contents.fillRect(x + width - thickness, y + thickness, thickness, height - (thickness * 2), borderRgbaColor);
        }

        const innerX = x + thickness;
        const innerY = y + thickness;
        const innerWidth = width - (thickness * 2);
        const innerHeight = height - (thickness * 2);

        if (innerWidth <= 0 || innerHeight <= 0) return;

        const rate = maxValue > 0 ? (currentValue / maxValue).clamp(0, 1) : 0;
        const fillWidth = Math.floor(innerWidth * rate);
        const backWidth = innerWidth - fillWidth;
        const isVertical = params.gradientOrientation === 'vertical';

        if (fillWidth > 0) {
            this.contents.gradientFillRect(innerX, innerY, fillWidth, innerHeight, params.color1, params.color2, isVertical);
        }

        if (backWidth > 0) {
            this.contents.fillRect(innerX + fillWidth, innerY, backWidth, innerHeight, pGaugeBackColor);
        }

        if (pEnableGaugeShadow && thickness > 0) {
            const shadowHeight = Math.min(thickness, Math.floor(innerHeight / 4));
            if (shadowHeight > 0) {
                let shadowY = innerY;
                if (pGaugeShadowPosition === 'bottom') {
                    shadowY = innerY + innerHeight - shadowHeight;
                }
                this.contents.fillRect(innerX, shadowY, innerWidth, shadowHeight, pGaugeBackColor);
            }
        }
    };
    
    Window_Hud.prototype.getTriggeredTextColor = function(params, currentValue) {
        if (!params.textColorTriggers || params.textColorTriggers.length === 0) {
            return params.textColor;
        }
    
        let bestMatch = {
            color: params.textColor,
            lessThreshold: Infinity,
            greaterThreshold: -Infinity
        };
    
        for (const trigger of params.textColorTriggers) {
            const checkValue = (trigger.variableId > 0) ? $gameVariables.value(trigger.variableId) : currentValue;
            const threshold = (trigger.thresholdVarId > 0) ? $gameVariables.value(trigger.thresholdVarId) : trigger.thresholdValue;
            
            if (trigger.type === 'equal') {
                if (checkValue === threshold) {
                    return trigger.color;
                }
            } else if (trigger.type === 'less') {
                if (checkValue < threshold && threshold < bestMatch.lessThreshold) {
                    bestMatch.lessThreshold = threshold;
                    bestMatch.color = trigger.color;
                }
            } else if (trigger.type === 'greater') {
                 if (checkValue > threshold && threshold > bestMatch.greaterThreshold) {
                    bestMatch.greaterThreshold = threshold;
                    bestMatch.color = trigger.color;
                }
            }
        }
    
        return bestMatch.color;
    };
    
    Window_Hud.prototype.drawHudText = function(params, currentValue, maxValue) {
        if (!params.showText) return;

        let text = (params.textFormat === 'current/max') ? `${currentValue}/${maxValue}` : `${currentValue}`;
        const fullText = params.textPrefix + text + params.textSuffix;

        const originalOpacity = this.contents.paintOpacity;
        const originalFontFace = this.contents.fontFace;
        const originalFontSize = this.contents.fontSize;

        this.resetFontSettings();
        this.contents.fontFace = params.fontFace || originalFontFace;
        if (params.textSize > 0) {
            this.contents.fontSize = params.textSize;
        }
        
        const finalTextColor = this.getTriggeredTextColor(params, currentValue);
        this.changeTextColor(finalTextColor);
        
        this.contents.paintOpacity = params.textOpacity;

        let drawX, drawY, drawWidth, drawAlign;
        const textHeight = params.height;
        drawY = params.y + params.textY;

        switch (params.textSide) {
            case 'left':
                drawWidth = params.x - params.textX;
                drawX = 0;
                drawAlign = 'right';
                this.contents.drawText(fullText, drawX, drawY, drawWidth, textHeight, drawAlign);
                break;
            case 'right':
                drawX = params.x + params.width + params.textX;
                drawWidth = this.contentsWidth() - drawX;
                drawAlign = 'left';
                this.contents.drawText(fullText, drawX, drawY, drawWidth, textHeight, drawAlign);
                break;
            default: // 'inside'
                drawX = params.x + params.textX;
                drawWidth = params.width;
                drawAlign = params.textAlign;
                this.contents.drawText(fullText, drawX, drawY, drawWidth, textHeight, drawAlign);
                break;
        }

        this.contents.paintOpacity = originalOpacity;
        this.contents.fontFace = originalFontFace;
        this.contents.fontSize = originalFontSize;
    };

    const _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        _Scene_Map_createDisplayObjects.call(this);
        this.createHudWindow();
    };

    Scene_Map.prototype.createHudWindow = function() {
        const rect = new Rectangle(0, 0, Graphics.boxWidth, Graphics.boxHeight);
        this._hudWindow = new Window_Hud(rect);
        this.addWindow(this._hudWindow);
    };

    const _Scene_Map_stop = Scene_Map.prototype.stop;
    Scene_Map.prototype.stop = function() {
        if (this._hudWindow) this._hudWindow.hide();
        _Scene_Map_stop.call(this);
    };

    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        _Scene_Map_start.call(this);
        if (this._hudWindow) this._hudWindow.show();
    };
})();
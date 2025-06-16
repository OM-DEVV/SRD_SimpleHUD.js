================================================================================
                          SRD_SimpleHUD Plugin Documentation
                                 Version 4.2.0
================================================================================

Author:      OM-Devv & AI
Target:      RPG Maker MZ
File Name:   SRD_SimpleHUD.js

--------------------------------------------------------------------------------
Description
--------------------------------------------------------------------------------

This plugin provides a highly customizable HUD (Heads-Up Display) system for 
RPG Maker MZ. It supports up to six configurable meters with dynamic positions, 
gradient bars, customizable text formatting, interactivity, and responsive 
triggers based on game variables or switches.

--------------------------------------------------------------------------------
Plugin Features
--------------------------------------------------------------------------------

✔ Up to 6 separate meters on screen.
✔ Meters can be anchored to screen corners or custom positioned.
✔ Gradient-filled bars with customizable colors and orientation.
✔ Show/hide meters using switches.
✔ Variable-based dynamic current and max values.
✔ Custom text display with prefix/suffix/format.
✔ Color triggers that change text based on values.
✔ Glow effects when mouse hovers over a meter.
✔ Trigger common events when meters are clicked.

--------------------------------------------------------------------------------
Plugin Commands
--------------------------------------------------------------------------------

These commands control the visibility of the HUD container (not individual meters):

  • Show HUD:
      Shows the entire HUD.

  • Hide HUD:
      Hides the entire HUD.

  • Toggle HUD:
      Toggles the HUD visibility.

--------------------------------------------------------------------------------
Key Plugin Parameters (per Meter)
--------------------------------------------------------------------------------

Each meter (1–6) has its own set of configuration parameters:

  - Enabled: Whether the meter is active.
  - Anchor: Layout anchor or custom position.
  - Variable ID: Game variable used for current value.
  - Max Variable ID: Optional separate variable for max value.
  - Width/Height: Dimensions of the meter bar.
  - Gradient Colors: Start and end gradient colors.
  - Border Color: Optional color override for borders.
  - Show Text: Enable or disable current/max value text.
  - Text Format: "Current", "Current/Max"
  - Text Prefix/Suffix: Extra text before/after value.
  - Text Align/Position: Place inside, left, or right of bar.
  - Text Color Triggers: Change color dynamically based on value.
  - Click Common Event: ID of common event to trigger on click.

--------------------------------------------------------------------------------
Global Parameters
--------------------------------------------------------------------------------

  - HUD Toggle Switch: Controls visibility of the whole HUD.
  - HUD Opacity: Transparency of the HUD contents.
  - Border Color/Opacity/Thickness: Global settings for bar outlines.
  - Gauge Background Color: Fills the unfilled portion of the bar.
  - Gauge Shadow: Optional visual shadow inside gauges.
  - Glow Effects: Optional glow when meters are hovered.

--------------------------------------------------------------------------------
Color Trigger System (Advanced Text Display)
--------------------------------------------------------------------------------

Each meter supports up to 3 color triggers:

  - Trigger when value is less than / greater than / equal to a threshold.
  - You can use fixed values or reference another variable.
  - The most specific active trigger is used.

--------------------------------------------------------------------------------
Example Use Case
--------------------------------------------------------------------------------

Meter 1:
- Displays HP using Variable 11
- Max HP is dynamically tracked
- Meter uses vertical red gradient (#ff8888 to #cc4444)
- Prefix: "HP: ", Format: Current/Max
- Text turns yellow under 50, red under 25

Meter 2:
- Displays Magic using Variable 12
- Uses a blue horizontal gradient (#88aaff to #4466cc)
- No text color triggers set, text always white

--------------------------------------------------------------------------------
Author Notes
--------------------------------------------------------------------------------

This plugin is structured to automatically refresh and layout meters based on 
switches and variable values. Mouse interaction and visual polish features 
are optional but enhance UX significantly.

Do not rename the plugin file or it may not function correctly in the Plugin Manager.

--------------------------------------------------------------------------------
License & Use
--------------------------------------------------------------------------------

Free for use in commercial and non-commercial RPG Maker MZ projects with credit.

================================================================================
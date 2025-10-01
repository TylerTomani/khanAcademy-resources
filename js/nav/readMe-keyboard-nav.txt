[User presses a key]
          |
          v
  +--------------------+
  | Convert key to      |
  | lowercase           |
  +--------------------+
          |
          v
  +--------------------+
  | Check if key is     |
  | alphanumeric (a-z0-9)|
  +--------------------+
          |
          v
  +--------------------+
  | Collect all visible |
  | focusable elements  |
  | (a, [id])           |
  +--------------------+
          |
          v
  +--------------------+
  | Filter elements by  |
  | first letter match  |
  | (text[0] === key)   |
  +--------------------+
          |
          v
  +--------------------+
  |   letteredEls       |
  | (elements that match|
  | the key)           |
  +--------------------+
          |
          v
  [Decide which element to focus next]

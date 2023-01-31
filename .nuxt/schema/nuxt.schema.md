# Nuxt Custom Config Schema 

# `appConfig`

## `nuxtIcon`

### `size`
- **Type**: `string`
- **Default**: `""`

> Icon Size


Set the default icon size


### `class`
- **Type**: `string`
- **Default**: `""`

> CSS Class


Set the default CSS class


### `aliases`

## `prose`

### `copyButton`

#### `iconCopy`
- **Type**: `string`
- **Default**: `"ph:copy"`

> Icon displayed to copy


#### `iconCopied`
- **Type**: `string`
- **Default**: `"ph:check"`

> Icon displayed when copied


### `headings`

#### `icon`
- **Type**: `string|false`
- **Default**: `"ph:link"`

> Default icon for anchor link on hover


### `h1`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h2`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h3`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h4`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h5`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


### `h6`

#### `icon`
- **Type**: `string|false`
- **Default**: `""`

> Icon displayed for anchor link on hover


## `alpine`

### `title`
- **Type**: `string`
- **Default**: `"Alpine"`

> Website title, used as header default title and meta title.


### `description`
- **Type**: `string`
- **Default**: `"The minimalist blog theme"`

> Website description, used for meta description.


### `image`

#### `src`
- **Type**: `string`
- **Default**: `"/social-card-preview.png"`


#### `alt`
- **Type**: `string`
- **Default**: `"An image showcasing my project."`


#### `width`
- **Type**: `number`
- **Default**: `400`


#### `height`
- **Type**: `number`
- **Default**: `300`


### `header`

#### `position`
- **Type**: `'left'|'center'|'right'`
- **Default**: `"right"`

> Header position.


#### `logo`

##### `path`
- **Type**: `string`
- **Default**: `"/logo.svg"`

> Path of the logo.


##### `pathDark`
- **Type**: `string`
- **Default**: `"/logo-dark.svg"`

> Path of the logo in dark mode.


Leave it empty if you want to use the same logo.


##### `alt`
- **Type**: `string`
- **Default**: `"Alpine theme logo"`

> Alt description for the image.


### `footer`

#### `credits`

##### `enabled`
- **Type**: `boolean`
- **Default**: `true`

> Toggle the footer.


##### `text`
- **Type**: `string`
- **Default**: `"Alpine"`

> Text to be displayed.


##### `repository`
- **Type**: `string`
- **Default**: `"https://www.github.com/nuxt-themes/alpine"`

> GitHub repository link.


#### `navigation`
- **Type**: `boolean`
- **Default**: `true`

> Toggle the navigation.


#### `alignment`
- **Type**: `'left'|'center'|'right'`
- **Default**: `"center"`

> Footer position.


#### `message`
- **Type**: `string`
- **Default**: `"Follow me on"`

> Footer message.


Leave it empty to disable.


### `socials`

#### `twitter`
- **Type**: `string`
- **Default**: `""`

> Twitter handle


#### `instagram`
- **Type**: `string`
- **Default**: `""`

> Instagram handle


#### `github`
- **Type**: `string`
- **Default**: `""`

> GitHub path


#### `facebook`
- **Type**: `string`
- **Default**: `""`

> GitHub path


#### `medium`
- **Type**: `string`
- **Default**: `""`

> Medium handle


#### `youtube`
- **Type**: `string`
- **Default**: `""`

> Youtube handle


### `form`

#### `successMessage`
- **Type**: `string`
- **Default**: `"Message sent. Thank you!"`

> Success message.

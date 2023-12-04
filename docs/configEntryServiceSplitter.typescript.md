# `configEntryServiceSplitter` Submodule <a name="`configEntryServiceSplitter` Submodule" id="@cdktf/provider-consul.configEntryServiceSplitter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceSplitter <a name="ConfigEntryServiceSplitter" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter consul_config_entry_service_splitter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

new configEntryServiceSplitter.ConfigEntryServiceSplitter(scope: Construct, id: string, config: ConfigEntryServiceSplitterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig">ConfigEntryServiceSplitterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig">ConfigEntryServiceSplitterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits">putSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition">resetPartition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSplits` <a name="putSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits"></a>

```typescript
public putSplits(value: IResolvable | ConfigEntryServiceSplitterSplits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition"></a>

```typescript
public resetPartition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigEntryServiceSplitter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigEntryServiceSplitter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceSplitter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits">splits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput">splitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition">partition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits"></a>

```typescript
public readonly splits: ConfigEntryServiceSplitterSplitsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `splitsInput`<sup>Optional</sup> <a name="splitsInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput"></a>

```typescript
public readonly splitsInput: IResolvable | ConfigEntryServiceSplitterSplits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceSplitterConfig <a name="ConfigEntryServiceSplitterConfig" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

const configEntryServiceSplitterConfig: configEntryServiceSplitter.ConfigEntryServiceSplitterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name">name</a></code> | <code>string</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits">splits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]</code> | splits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition">partition</a></code> | <code>string</code> | Specifies the admin partition to apply the configuration entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#name ConfigEntryServiceSplitter#name}

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits"></a>

```typescript
public readonly splits: IResolvable | ConfigEntryServiceSplitterSplits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#splits ConfigEntryServiceSplitter#splits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#meta ConfigEntryServiceSplitter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

### ConfigEntryServiceSplitterSplits <a name="ConfigEntryServiceSplitterSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

const configEntryServiceSplitterSplits: configEntryServiceSplitter.ConfigEntryServiceSplitterSplits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service">service</a></code> | <code>string</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight">weight</a></code> | <code>number</code> | Specifies the percentage of traffic sent to the set of service instances specified in the `service` field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition">partition</a></code> | <code>string</code> | Specifies the admin partition to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders">requestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders">responseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | Specifies a subset of the service to resolve. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#service ConfigEntryServiceSplitter#service}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Specifies the percentage of traffic sent to the set of service instances specified in the `service` field.

Each weight must be a floating integer between `0` and `100`. The smallest representable value is `.01`. The sum of weights across all splits must add up to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#weight ConfigEntryServiceSplitter#weight}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the admin partition to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: ConfigEntryServiceSplitterSplitsRequestHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#request_headers ConfigEntryServiceSplitter#request_headers}

---

##### `responseHeaders`<sup>Optional</sup> <a name="responseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders"></a>

```typescript
public readonly responseHeaders: ConfigEntryServiceSplitterSplitsResponseHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#response_headers ConfigEntryServiceSplitter#response_headers}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

Specifies a subset of the service to resolve.

A service subset assigns a name to a specific subset of discoverable service instances within a datacenter, such as `version2` or `canary`. All services have an unnamed default subset that returns all healthy instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#service_subset ConfigEntryServiceSplitter#service_subset}

---

### ConfigEntryServiceSplitterSplitsRequestHeaders <a name="ConfigEntryServiceSplitterSplitsRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

const configEntryServiceSplitterSplitsRequestHeaders: configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove">remove</a></code> | <code>string[]</code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | Map of one or more key-value pairs. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

### ConfigEntryServiceSplitterSplitsResponseHeaders <a name="ConfigEntryServiceSplitterSplitsResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

const configEntryServiceSplitterSplitsResponseHeaders: configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove">remove</a></code> | <code>string[]</code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | Map of one or more key-value pairs. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceSplitterSplitsList <a name="ConfigEntryServiceSplitterSplitsList" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

new configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceSplitterSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceSplitterSplits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]

---


### ConfigEntryServiceSplitterSplitsOutputReference <a name="ConfigEntryServiceSplitterSplitsOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

new configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders">putRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders">putResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders">resetResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeaders` <a name="putRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders"></a>

```typescript
public putRequestHeaders(value: ConfigEntryServiceSplitterSplitsRequestHeaders): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `putResponseHeaders` <a name="putResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders"></a>

```typescript
public putResponseHeaders(value: ConfigEntryServiceSplitterSplitsResponseHeaders): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

##### `resetResponseHeaders` <a name="resetResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders"></a>

```typescript
public resetResponseHeaders(): void
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset"></a>

```typescript
public resetServiceSubset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders">requestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders">responseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput">responseHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a>

---

##### `responseHeaders`<sup>Required</sup> <a name="responseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders"></a>

```typescript
public readonly responseHeaders: ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: ConfigEntryServiceSplitterSplitsRequestHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `responseHeadersInput`<sup>Optional</sup> <a name="responseHeadersInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput"></a>

```typescript
public readonly responseHeadersInput: ConfigEntryServiceSplitterSplitsResponseHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput"></a>

```typescript
public readonly serviceSubsetInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceSplitterSplits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>

---


### ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

new configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput">addInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput">removeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput">setInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove">remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput"></a>

```typescript
public readonly addInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string[];
```

- *Type:* string[]

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput"></a>

```typescript
public readonly setInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigEntryServiceSplitterSplitsRequestHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---


### ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer"></a>

```typescript
import { configEntryServiceSplitter } from '@cdktf/provider-consul'

new configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput">addInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput">removeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput">setInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove">remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput"></a>

```typescript
public readonly addInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string[];
```

- *Type:* string[]

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput"></a>

```typescript
public readonly setInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigEntryServiceSplitterSplitsResponseHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---




# `configEntryServiceRouter` Submodule <a name="`configEntryServiceRouter` Submodule" id="@cdktf/provider-consul.configEntryServiceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceRouter <a name="ConfigEntryServiceRouter" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router consul_config_entry_service_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouter(scope: Construct, id: string, config: ConfigEntryServiceRouterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig">ConfigEntryServiceRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig">ConfigEntryServiceRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes">putRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetRoutes">resetRoutes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutes` <a name="putRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes"></a>

```typescript
public putRoutes(value: IResolvable | ConfigEntryServiceRouterRoutes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetRoutes` <a name="resetRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetRoutes"></a>

```typescript
public resetRoutes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigEntryServiceRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigEntryServiceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList">ConfigEntryServiceRouterRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routesInput">routesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partition">partition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routes"></a>

```typescript
public readonly routes: ConfigEntryServiceRouterRoutesList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList">ConfigEntryServiceRouterRoutesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `routesInput`<sup>Optional</sup> <a name="routesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routesInput"></a>

```typescript
public readonly routesInput: IResolvable | ConfigEntryServiceRouterRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceRouterConfig <a name="ConfigEntryServiceRouterConfig" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterConfig: configEntryServiceRouter.ConfigEntryServiceRouterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.name">name</a></code> | <code>string</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.partition">partition</a></code> | <code>string</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.routes">routes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>[]</code> | routes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#meta ConfigEntryServiceRouter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.routes"></a>

```typescript
public readonly routes: IResolvable | ConfigEntryServiceRouterRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>[]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#routes ConfigEntryServiceRouter#routes}

---

### ConfigEntryServiceRouterRoutes <a name="ConfigEntryServiceRouterRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterRoutes: configEntryServiceRouter.ConfigEntryServiceRouterRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.match">match</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | match block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.destination"></a>

```typescript
public readonly destination: ConfigEntryServiceRouterRoutesDestination;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#destination ConfigEntryServiceRouter#destination}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.match"></a>

```typescript
public readonly match: ConfigEntryServiceRouterRoutesMatch;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#match ConfigEntryServiceRouter#match}

---

### ConfigEntryServiceRouterRoutesDestination <a name="ConfigEntryServiceRouterRoutesDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterRoutesDestination: configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.idleTimeout">idleTimeout</a></code> | <code>string</code> | Specifies the total amount of time permitted for the request stream to be idle. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.namespace">namespace</a></code> | <code>string</code> | Specifies the Consul namespace to resolve the service from instead of the current namespace. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.numRetries">numRetries</a></code> | <code>number</code> | Specifies the number of times to retry the request when a retry condition occurs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.partition">partition</a></code> | <code>string</code> | Specifies the Consul admin partition to resolve the service from instead of the current partition. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.prefixRewrite">prefixRewrite</a></code> | <code>string</code> | Specifies rewrites to the HTTP request path before proxying it to its final destination. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestHeaders">requestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.responseHeaders">responseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOn">retryOn</a></code> | <code>string[]</code> | Specifies a list of conditions for Consul to retry requests based on the response from an upstream service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnConnectFailure">retryOnConnectFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that connection failure errors that trigger a retry request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnStatusCodes">retryOnStatusCodes</a></code> | <code>number[]</code> | Specifies a list of integers for HTTP response status codes that trigger a retry request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.service">service</a></code> | <code>string</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry. |

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: string;
```

- *Type:* string

Specifies the total amount of time permitted for the request stream to be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#idle_timeout ConfigEntryServiceRouter#idle_timeout}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the Consul namespace to resolve the service from instead of the current namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `numRetries`<sup>Optional</sup> <a name="numRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

Specifies the number of times to retry the request when a retry condition occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#num_retries ConfigEntryServiceRouter#num_retries}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the Consul admin partition to resolve the service from instead of the current partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `prefixRewrite`<sup>Optional</sup> <a name="prefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.prefixRewrite"></a>

```typescript
public readonly prefixRewrite: string;
```

- *Type:* string

Specifies rewrites to the HTTP request path before proxying it to its final destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#prefix_rewrite ConfigEntryServiceRouter#prefix_rewrite}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: ConfigEntryServiceRouterRoutesDestinationRequestHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#request_headers ConfigEntryServiceRouter#request_headers}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#request_timeout ConfigEntryServiceRouter#request_timeout}

---

##### `responseHeaders`<sup>Optional</sup> <a name="responseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.responseHeaders"></a>

```typescript
public readonly responseHeaders: ConfigEntryServiceRouterRoutesDestinationResponseHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#response_headers ConfigEntryServiceRouter#response_headers}

---

##### `retryOn`<sup>Optional</sup> <a name="retryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOn"></a>

```typescript
public readonly retryOn: string[];
```

- *Type:* string[]

Specifies a list of conditions for Consul to retry requests based on the response from an upstream service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#retry_on ConfigEntryServiceRouter#retry_on}

---

##### `retryOnConnectFailure`<sup>Optional</sup> <a name="retryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnConnectFailure"></a>

```typescript
public readonly retryOnConnectFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that connection failure errors that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#retry_on_connect_failure ConfigEntryServiceRouter#retry_on_connect_failure}

---

##### `retryOnStatusCodes`<sup>Optional</sup> <a name="retryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnStatusCodes"></a>

```typescript
public readonly retryOnStatusCodes: number[];
```

- *Type:* number[]

Specifies a list of integers for HTTP response status codes that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#retry_on_status_codes ConfigEntryServiceRouter#retry_on_status_codes}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#service ConfigEntryServiceRouter#service}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#service_subset ConfigEntryServiceRouter#service_subset}

---

### ConfigEntryServiceRouterRoutesDestinationRequestHeaders <a name="ConfigEntryServiceRouterRoutesDestinationRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterRoutesDestinationRequestHeaders: configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | Defines a set of key-value pairs to add to the header. Use header names as the keys. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.remove">remove</a></code> | <code>string[]</code> | Defines a list of headers to remove. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | Defines a set of key-value pairs to add to the request header or to replace existing header values with. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Defines a set of key-value pairs to add to the request header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

### ConfigEntryServiceRouterRoutesDestinationResponseHeaders <a name="ConfigEntryServiceRouterRoutesDestinationResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterRoutesDestinationResponseHeaders: configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | Defines a set of key-value pairs to add to the header. Use header names as the keys. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.remove">remove</a></code> | <code>string[]</code> | Defines a list of headers to remove. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | Defines a set of key-value pairs to add to the response header or to replace existing header values with. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Defines a set of key-value pairs to add to the response header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

### ConfigEntryServiceRouterRoutesMatch <a name="ConfigEntryServiceRouterRoutesMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterRoutesMatch: configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.property.http">http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | http block. |

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.property.http"></a>

```typescript
public readonly http: ConfigEntryServiceRouterRoutesMatchHttp;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#http ConfigEntryServiceRouter#http}

---

### ConfigEntryServiceRouterRoutesMatchHttp <a name="ConfigEntryServiceRouterRoutesMatchHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterRoutesMatchHttp: configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.methods">methods</a></code> | <code>string[]</code> | Specifies HTTP methods that the match applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathExact">pathExact</a></code> | <code>string</code> | Specifies the exact path to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | Specifies the path prefix to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathRegex">pathRegex</a></code> | <code>string</code> | Specifies a regular expression to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.queryParam">queryParam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>[]</code> | query_param block. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.header"></a>

```typescript
public readonly header: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#header ConfigEntryServiceRouter#header}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

Specifies HTTP methods that the match applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#methods ConfigEntryServiceRouter#methods}

---

##### `pathExact`<sup>Optional</sup> <a name="pathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathExact"></a>

```typescript
public readonly pathExact: string;
```

- *Type:* string

Specifies the exact path to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#path_exact ConfigEntryServiceRouter#path_exact}

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

Specifies the path prefix to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#path_prefix ConfigEntryServiceRouter#path_prefix}

---

##### `pathRegex`<sup>Optional</sup> <a name="pathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathRegex"></a>

```typescript
public readonly pathRegex: string;
```

- *Type:* string

Specifies a regular expression to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#path_regex ConfigEntryServiceRouter#path_regex}

---

##### `queryParam`<sup>Optional</sup> <a name="queryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.queryParam"></a>

```typescript
public readonly queryParam: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>[]

query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#query_param ConfigEntryServiceRouter#query_param}

---

### ConfigEntryServiceRouterRoutesMatchHttpHeader <a name="ConfigEntryServiceRouterRoutesMatchHttpHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterRoutesMatchHttpHeader: configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.exact">exact</a></code> | <code>string</code> | Specifies that a request matches when the header with the given name is this exact value. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that the logic for the HTTP header match should be inverted. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.name">name</a></code> | <code>string</code> | Specifies the name of the HTTP header to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.prefix">prefix</a></code> | <code>string</code> | Specifies that a request matches when the header with the given name has this prefix. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.present">present</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.regex">regex</a></code> | <code>string</code> | Specifies that a request matches when the header with the given name matches this regular expression. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.suffix">suffix</a></code> | <code>string</code> | Specifies that a request matches when the header with the given name has this suffix. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Specifies that a request matches when the header with the given name is this exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that the logic for the HTTP header match should be inverted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#invert ConfigEntryServiceRouter#invert}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the HTTP header to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Specifies that a request matches when the header with the given name has this prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#prefix ConfigEntryServiceRouter#prefix}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.present"></a>

```typescript
public readonly present: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Specifies that a request matches when the header with the given name matches this regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Specifies that a request matches when the header with the given name has this suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#suffix ConfigEntryServiceRouter#suffix}

---

### ConfigEntryServiceRouterRoutesMatchHttpQueryParam <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

const configEntryServiceRouterRoutesMatchHttpQueryParam: configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.exact">exact</a></code> | <code>string</code> | Specifies that a request matches when the query parameter with the given name is this exact value. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.name">name</a></code> | <code>string</code> | Specifies the name of the HTTP query parameter to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.present">present</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.regex">regex</a></code> | <code>string</code> | Specifies that a request matches when the query parameter with the given name matches this regular expression. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Specifies that a request matches when the query parameter with the given name is this exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the HTTP query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.present"></a>

```typescript
public readonly present: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Specifies that a request matches when the query parameter with the given name matches this regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceRouterRoutesDestinationOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders">putRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders">putResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNumRetries">resetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPrefixRewrite">resetPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetResponseHeaders">resetResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOn">resetRetryOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnConnectFailure">resetRetryOnConnectFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnStatusCodes">resetRetryOnStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeaders` <a name="putRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders"></a>

```typescript
public putRequestHeaders(value: ConfigEntryServiceRouterRoutesDestinationRequestHeaders): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---

##### `putResponseHeaders` <a name="putResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders"></a>

```typescript
public putResponseHeaders(value: ConfigEntryServiceRouterRoutesDestinationResponseHeaders): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetIdleTimeout"></a>

```typescript
public resetIdleTimeout(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNumRetries` <a name="resetNumRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNumRetries"></a>

```typescript
public resetNumRetries(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPrefixRewrite` <a name="resetPrefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPrefixRewrite"></a>

```typescript
public resetPrefixRewrite(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetResponseHeaders` <a name="resetResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetResponseHeaders"></a>

```typescript
public resetResponseHeaders(): void
```

##### `resetRetryOn` <a name="resetRetryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOn"></a>

```typescript
public resetRetryOn(): void
```

##### `resetRetryOnConnectFailure` <a name="resetRetryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnConnectFailure"></a>

```typescript
public resetRetryOnConnectFailure(): void
```

##### `resetRetryOnStatusCodes` <a name="resetRetryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnStatusCodes"></a>

```typescript
public resetRetryOnStatusCodes(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetServiceSubset"></a>

```typescript
public resetServiceSubset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeaders">requestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeaders">responseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetriesInput">numRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewriteInput">prefixRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeadersInput">responseHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailureInput">retryOnConnectFailureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnInput">retryOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodesInput">retryOnStatusCodesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetries">numRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewrite">prefixRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOn">retryOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailure">retryOnConnectFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodes">retryOnStatusCodes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference</a>

---

##### `responseHeaders`<sup>Required</sup> <a name="responseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeaders"></a>

```typescript
public readonly responseHeaders: ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference</a>

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeoutInput"></a>

```typescript
public readonly idleTimeoutInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `numRetriesInput`<sup>Optional</sup> <a name="numRetriesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetriesInput"></a>

```typescript
public readonly numRetriesInput: number;
```

- *Type:* number

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `prefixRewriteInput`<sup>Optional</sup> <a name="prefixRewriteInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewriteInput"></a>

```typescript
public readonly prefixRewriteInput: string;
```

- *Type:* string

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: ConfigEntryServiceRouterRoutesDestinationRequestHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: string;
```

- *Type:* string

---

##### `responseHeadersInput`<sup>Optional</sup> <a name="responseHeadersInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeadersInput"></a>

```typescript
public readonly responseHeadersInput: ConfigEntryServiceRouterRoutesDestinationResponseHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---

##### `retryOnConnectFailureInput`<sup>Optional</sup> <a name="retryOnConnectFailureInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailureInput"></a>

```typescript
public readonly retryOnConnectFailureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryOnInput`<sup>Optional</sup> <a name="retryOnInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnInput"></a>

```typescript
public readonly retryOnInput: string[];
```

- *Type:* string[]

---

##### `retryOnStatusCodesInput`<sup>Optional</sup> <a name="retryOnStatusCodesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodesInput"></a>

```typescript
public readonly retryOnStatusCodesInput: number[];
```

- *Type:* number[]

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubsetInput"></a>

```typescript
public readonly serviceSubsetInput: string;
```

- *Type:* string

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `prefixRewrite`<sup>Required</sup> <a name="prefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewrite"></a>

```typescript
public readonly prefixRewrite: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

---

##### `retryOn`<sup>Required</sup> <a name="retryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOn"></a>

```typescript
public readonly retryOn: string[];
```

- *Type:* string[]

---

##### `retryOnConnectFailure`<sup>Required</sup> <a name="retryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailure"></a>

```typescript
public readonly retryOnConnectFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryOnStatusCodes`<sup>Required</sup> <a name="retryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodes"></a>

```typescript
public readonly retryOnStatusCodes: number[];
```

- *Type:* number[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigEntryServiceRouterRoutesDestination;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---


### ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.addInput">addInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.removeInput">removeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.setInput">setInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.remove">remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.addInput"></a>

```typescript
public readonly addInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string[];
```

- *Type:* string[]

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.setInput"></a>

```typescript
public readonly setInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigEntryServiceRouterRoutesDestinationRequestHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---


### ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.addInput">addInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.removeInput">removeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.setInput">setInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.remove">remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.addInput"></a>

```typescript
public readonly addInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string[];
```

- *Type:* string[]

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.setInput"></a>

```typescript
public readonly setInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigEntryServiceRouterRoutesDestinationResponseHeaders;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---


### ConfigEntryServiceRouterRoutesList <a name="ConfigEntryServiceRouterRoutesList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceRouterRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceRouterRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>[]

---


### ConfigEntryServiceRouterRoutesMatchHttpHeaderList <a name="ConfigEntryServiceRouterRoutesMatchHttpHeaderList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>[]

---


### ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPresent">resetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetInvert` <a name="resetInvert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetInvert"></a>

```typescript
public resetInvert(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetPresent` <a name="resetPresent" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPresent"></a>

```typescript
public resetPresent(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invertInput">invertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.presentInput">presentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.present">present</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invertInput"></a>

```typescript
public readonly invertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `presentInput`<sup>Optional</sup> <a name="presentInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.presentInput"></a>

```typescript
public readonly presentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.present"></a>

```typescript
public readonly present: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>

---


### ConfigEntryServiceRouterRoutesMatchHttpOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam">putQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathExact">resetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathRegex">resetPathRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetQueryParam">resetQueryParam</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>[]

---

##### `putQueryParam` <a name="putQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam"></a>

```typescript
public putQueryParam(value: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpQueryParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>[]

---

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetMethods"></a>

```typescript
public resetMethods(): void
```

##### `resetPathExact` <a name="resetPathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathExact"></a>

```typescript
public resetPathExact(): void
```

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathPrefix"></a>

```typescript
public resetPathPrefix(): void
```

##### `resetPathRegex` <a name="resetPathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathRegex"></a>

```typescript
public resetPathRegex(): void
```

##### `resetQueryParam` <a name="resetQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetQueryParam"></a>

```typescript
public resetQueryParam(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList">ConfigEntryServiceRouterRoutesMatchHttpHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParam">queryParam</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList">ConfigEntryServiceRouterRoutesMatchHttpQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExactInput">pathExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefixInput">pathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegexInput">pathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParamInput">queryParamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExact">pathExact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegex">pathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.header"></a>

```typescript
public readonly header: ConfigEntryServiceRouterRoutesMatchHttpHeaderList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList">ConfigEntryServiceRouterRoutesMatchHttpHeaderList</a>

---

##### `queryParam`<sup>Required</sup> <a name="queryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParam"></a>

```typescript
public readonly queryParam: ConfigEntryServiceRouterRoutesMatchHttpQueryParamList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList">ConfigEntryServiceRouterRoutesMatchHttpQueryParamList</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>[]

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `pathExactInput`<sup>Optional</sup> <a name="pathExactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExactInput"></a>

```typescript
public readonly pathExactInput: string;
```

- *Type:* string

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefixInput"></a>

```typescript
public readonly pathPrefixInput: string;
```

- *Type:* string

---

##### `pathRegexInput`<sup>Optional</sup> <a name="pathRegexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegexInput"></a>

```typescript
public readonly pathRegexInput: string;
```

- *Type:* string

---

##### `queryParamInput`<sup>Optional</sup> <a name="queryParamInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParamInput"></a>

```typescript
public readonly queryParamInput: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>[]

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `pathExact`<sup>Required</sup> <a name="pathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExact"></a>

```typescript
public readonly pathExact: string;
```

- *Type:* string

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `pathRegex`<sup>Required</sup> <a name="pathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegex"></a>

```typescript
public readonly pathRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigEntryServiceRouterRoutesMatchHttp;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---


### ConfigEntryServiceRouterRoutesMatchHttpQueryParamList <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParamList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>[]

---


### ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetPresent">resetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPresent` <a name="resetPresent" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetPresent"></a>

```typescript
public resetPresent(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.presentInput">presentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.present">present</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `presentInput`<sup>Optional</sup> <a name="presentInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.presentInput"></a>

```typescript
public readonly presentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.present"></a>

```typescript
public readonly present: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceRouterRoutesMatchHttpQueryParam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>

---


### ConfigEntryServiceRouterRoutesMatchOutputReference <a name="ConfigEntryServiceRouterRoutesMatchOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resetHttp">resetHttp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttp` <a name="putHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp"></a>

```typescript
public putHttp(value: ConfigEntryServiceRouterRoutesMatchHttp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---

##### `resetHttp` <a name="resetHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resetHttp"></a>

```typescript
public resetHttp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference">ConfigEntryServiceRouterRoutesMatchHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.httpInput">httpInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.http"></a>

```typescript
public readonly http: ConfigEntryServiceRouterRoutesMatchHttpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference">ConfigEntryServiceRouterRoutesMatchHttpOutputReference</a>

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.httpInput"></a>

```typescript
public readonly httpInput: ConfigEntryServiceRouterRoutesMatchHttp;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigEntryServiceRouterRoutesMatch;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---


### ConfigEntryServiceRouterRoutesOutputReference <a name="ConfigEntryServiceRouterRoutesOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer"></a>

```typescript
import { configEntryServiceRouter } from '@cdktf/provider-consul'

new configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination"></a>

```typescript
public putDestination(value: ConfigEntryServiceRouterRoutesDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch"></a>

```typescript
public putMatch(value: ConfigEntryServiceRouterRoutesMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference">ConfigEntryServiceRouterRoutesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference">ConfigEntryServiceRouterRoutesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destination"></a>

```typescript
public readonly destination: ConfigEntryServiceRouterRoutesDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference">ConfigEntryServiceRouterRoutesDestinationOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.match"></a>

```typescript
public readonly match: ConfigEntryServiceRouterRoutesMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference">ConfigEntryServiceRouterRoutesMatchOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: ConfigEntryServiceRouterRoutesDestination;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: ConfigEntryServiceRouterRoutesMatch;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceRouterRoutes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>

---




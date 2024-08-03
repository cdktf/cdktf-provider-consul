# `autopilotConfig` Submodule <a name="`autopilotConfig` Submodule" id="@cdktf/provider-consul.autopilotConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutopilotConfig <a name="AutopilotConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config consul_autopilot_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer"></a>

```typescript
import { autopilotConfig } from '@cdktf/provider-consul'

new autopilotConfig.AutopilotConfig(scope: Construct, id: string, config?: AutopilotConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig">AutopilotConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig">AutopilotConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers">resetCleanupDeadServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration">resetDisableUpgradeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold">resetLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs">resetMaxTrailingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag">resetRedundancyZoneTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime">resetServerStabilizationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag">resetUpgradeVersionTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCleanupDeadServers` <a name="resetCleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers"></a>

```typescript
public resetCleanupDeadServers(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetDisableUpgradeMigration` <a name="resetDisableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration"></a>

```typescript
public resetDisableUpgradeMigration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastContactThreshold` <a name="resetLastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold"></a>

```typescript
public resetLastContactThreshold(): void
```

##### `resetMaxTrailingLogs` <a name="resetMaxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs"></a>

```typescript
public resetMaxTrailingLogs(): void
```

##### `resetRedundancyZoneTag` <a name="resetRedundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag"></a>

```typescript
public resetRedundancyZoneTag(): void
```

##### `resetServerStabilizationTime` <a name="resetServerStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime"></a>

```typescript
public resetServerStabilizationTime(): void
```

##### `resetUpgradeVersionTag` <a name="resetUpgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag"></a>

```typescript
public resetUpgradeVersionTag(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct"></a>

```typescript
import { autopilotConfig } from '@cdktf/provider-consul'

autopilotConfig.AutopilotConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement"></a>

```typescript
import { autopilotConfig } from '@cdktf/provider-consul'

autopilotConfig.AutopilotConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource"></a>

```typescript
import { autopilotConfig } from '@cdktf/provider-consul'

autopilotConfig.AutopilotConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport"></a>

```typescript
import { autopilotConfig } from '@cdktf/provider-consul'

autopilotConfig.AutopilotConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutopilotConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutopilotConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutopilotConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput">cleanupDeadServersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput">disableUpgradeMigrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput">lastContactThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput">maxTrailingLogsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput">redundancyZoneTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput">serverStabilizationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput">upgradeVersionTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers">cleanupDeadServers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold">lastContactThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs">maxTrailingLogs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag">redundancyZoneTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime">serverStabilizationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag">upgradeVersionTag</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cleanupDeadServersInput`<sup>Optional</sup> <a name="cleanupDeadServersInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput"></a>

```typescript
public readonly cleanupDeadServersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `disableUpgradeMigrationInput`<sup>Optional</sup> <a name="disableUpgradeMigrationInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput"></a>

```typescript
public readonly disableUpgradeMigrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastContactThresholdInput`<sup>Optional</sup> <a name="lastContactThresholdInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput"></a>

```typescript
public readonly lastContactThresholdInput: string;
```

- *Type:* string

---

##### `maxTrailingLogsInput`<sup>Optional</sup> <a name="maxTrailingLogsInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput"></a>

```typescript
public readonly maxTrailingLogsInput: number;
```

- *Type:* number

---

##### `redundancyZoneTagInput`<sup>Optional</sup> <a name="redundancyZoneTagInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput"></a>

```typescript
public readonly redundancyZoneTagInput: string;
```

- *Type:* string

---

##### `serverStabilizationTimeInput`<sup>Optional</sup> <a name="serverStabilizationTimeInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput"></a>

```typescript
public readonly serverStabilizationTimeInput: string;
```

- *Type:* string

---

##### `upgradeVersionTagInput`<sup>Optional</sup> <a name="upgradeVersionTagInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput"></a>

```typescript
public readonly upgradeVersionTagInput: string;
```

- *Type:* string

---

##### `cleanupDeadServers`<sup>Required</sup> <a name="cleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers"></a>

```typescript
public readonly cleanupDeadServers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `disableUpgradeMigration`<sup>Required</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration"></a>

```typescript
public readonly disableUpgradeMigration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastContactThreshold`<sup>Required</sup> <a name="lastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold"></a>

```typescript
public readonly lastContactThreshold: string;
```

- *Type:* string

---

##### `maxTrailingLogs`<sup>Required</sup> <a name="maxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs"></a>

```typescript
public readonly maxTrailingLogs: number;
```

- *Type:* number

---

##### `redundancyZoneTag`<sup>Required</sup> <a name="redundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag"></a>

```typescript
public readonly redundancyZoneTag: string;
```

- *Type:* string

---

##### `serverStabilizationTime`<sup>Required</sup> <a name="serverStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime"></a>

```typescript
public readonly serverStabilizationTime: string;
```

- *Type:* string

---

##### `upgradeVersionTag`<sup>Required</sup> <a name="upgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag"></a>

```typescript
public readonly upgradeVersionTag: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutopilotConfigConfig <a name="AutopilotConfigConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.Initializer"></a>

```typescript
import { autopilotConfig } from '@cdktf/provider-consul'

const autopilotConfigConfig: autopilotConfig.AutopilotConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers">cleanupDeadServers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter">datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#id AutopilotConfig#id}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold">lastContactThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs">maxTrailingLogs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag">redundancyZoneTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime">serverStabilizationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag">upgradeVersionTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cleanupDeadServers`<sup>Optional</sup> <a name="cleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers"></a>

```typescript
public readonly cleanupDeadServers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}.

---

##### `disableUpgradeMigration`<sup>Optional</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration"></a>

```typescript
public readonly disableUpgradeMigration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#id AutopilotConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastContactThreshold`<sup>Optional</sup> <a name="lastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold"></a>

```typescript
public readonly lastContactThreshold: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}.

---

##### `maxTrailingLogs`<sup>Optional</sup> <a name="maxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs"></a>

```typescript
public readonly maxTrailingLogs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}.

---

##### `redundancyZoneTag`<sup>Optional</sup> <a name="redundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag"></a>

```typescript
public readonly redundancyZoneTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}.

---

##### `serverStabilizationTime`<sup>Optional</sup> <a name="serverStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime"></a>

```typescript
public readonly serverStabilizationTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}.

---

##### `upgradeVersionTag`<sup>Optional</sup> <a name="upgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag"></a>

```typescript
public readonly upgradeVersionTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}.

---




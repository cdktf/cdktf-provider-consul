# `consul_config_entry_service_intentions`

Refer to the Terraform Registory for docs: [`consul_config_entry_service_intentions`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions).

# `configEntryServiceIntentions` Submodule <a name="`configEntryServiceIntentions` Submodule" id="@cdktf/provider-consul.configEntryServiceIntentions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceIntentions <a name="ConfigEntryServiceIntentions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions consul_config_entry_service_intentions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentions(scope: Construct, id: string, config: ConfigEntryServiceIntentionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig">ConfigEntryServiceIntentionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig">ConfigEntryServiceIntentionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt">putJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetJwt">resetJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetSources">resetSources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putJwt` <a name="putJwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt"></a>

```typescript
public putJwt(value: IResolvable | ConfigEntryServiceIntentionsJwt[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>[]

---

##### `putSources` <a name="putSources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources"></a>

```typescript
public putSources(value: IResolvable | ConfigEntryServiceIntentionsSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJwt` <a name="resetJwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetJwt"></a>

```typescript
public resetJwt(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetSources"></a>

```typescript
public resetSources(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceIntentions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigEntryServiceIntentions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigEntryServiceIntentions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigEntryServiceIntentions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceIntentions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList">ConfigEntryServiceIntentionsJwtList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList">ConfigEntryServiceIntentionsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwtInput">jwtInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sourcesInput">sourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partition">partition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwt"></a>

```typescript
public readonly jwt: ConfigEntryServiceIntentionsJwtList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList">ConfigEntryServiceIntentionsJwtList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sources"></a>

```typescript
public readonly sources: ConfigEntryServiceIntentionsSourcesList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList">ConfigEntryServiceIntentionsSourcesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jwtInput`<sup>Optional</sup> <a name="jwtInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwtInput"></a>

```typescript
public readonly jwtInput: IResolvable | ConfigEntryServiceIntentionsJwt[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>[]

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: IResolvable | ConfigEntryServiceIntentionsSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceIntentionsConfig <a name="ConfigEntryServiceIntentionsConfig" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

const configEntryServiceIntentionsConfig: configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.name">name</a></code> | <code>string</code> | Specifies a name of the destination service for all intentions defined in the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#id ConfigEntryServiceIntentions#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.jwt">jwt</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>[]</code> | jwt block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.partition">partition</a></code> | <code>string</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.sources">sources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>[]</code> | sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies a name of the destination service for all intentions defined in the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#id ConfigEntryServiceIntentions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.jwt"></a>

```typescript
public readonly jwt: IResolvable | ConfigEntryServiceIntentionsJwt[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>[]

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#jwt ConfigEntryServiceIntentions#jwt}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#meta ConfigEntryServiceIntentions#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#namespace ConfigEntryServiceIntentions#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#partition ConfigEntryServiceIntentions#partition}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.sources"></a>

```typescript
public readonly sources: IResolvable | ConfigEntryServiceIntentionsSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>[]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#sources ConfigEntryServiceIntentions#sources}

---

### ConfigEntryServiceIntentionsJwt <a name="ConfigEntryServiceIntentionsJwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

const configEntryServiceIntentionsJwt: configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.property.providers">providers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>[]</code> | providers block. |

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.property.providers"></a>

```typescript
public readonly providers: IResolvable | ConfigEntryServiceIntentionsJwtProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>[]

providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#providers ConfigEntryServiceIntentions#providers}

---

### ConfigEntryServiceIntentionsJwtProviders <a name="ConfigEntryServiceIntentionsJwtProviders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

const configEntryServiceIntentionsJwtProviders: configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.name">name</a></code> | <code>string</code> | Specifies the name of a JWT provider defined in the Name field of the jwt-provider configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.verifyClaims">verifyClaims</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>[]</code> | verify_claims block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of a JWT provider defined in the Name field of the jwt-provider configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `verifyClaims`<sup>Optional</sup> <a name="verifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.verifyClaims"></a>

```typescript
public readonly verifyClaims: IResolvable | ConfigEntryServiceIntentionsJwtProvidersVerifyClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>[]

verify_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#verify_claims ConfigEntryServiceIntentions#verify_claims}

---

### ConfigEntryServiceIntentionsJwtProvidersVerifyClaims <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

const configEntryServiceIntentionsJwtProvidersVerifyClaims: configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.path">path</a></code> | <code>string[]</code> | Specifies the path to the claim in the JSON web token. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.value">value</a></code> | <code>string</code> | Specifies the value to match on when verifying the the claim designated in path. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.path"></a>

```typescript
public readonly path: string[];
```

- *Type:* string[]

Specifies the path to the claim in the JSON web token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#path ConfigEntryServiceIntentions#path}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Specifies the value to match on when verifying the the claim designated in path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#value ConfigEntryServiceIntentions#value}

---

### ConfigEntryServiceIntentionsSources <a name="ConfigEntryServiceIntentionsSources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

const configEntryServiceIntentionsSources: configEntryServiceIntentions.ConfigEntryServiceIntentionsSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.action">action</a></code> | <code>string</code> | Specifies the action to take when the source sends traffic to the destination service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.description">description</a></code> | <code>string</code> | Specifies a description of the intention. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.name">name</a></code> | <code>string</code> | Specifies the name of the source that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.namespace">namespace</a></code> | <code>string</code> | Specifies the traffic source namespace that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.partition">partition</a></code> | <code>string</code> | Specifies the name of an admin partition that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.peer">peer</a></code> | <code>string</code> | Specifies the name of a peered Consul cluster that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>[]</code> | permissions block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.precedence">precedence</a></code> | <code>number</code> | The Precedence field contains a read-only integer. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.samenessGroup">samenessGroup</a></code> | <code>string</code> | Specifies the name of a sameness group that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.type">type</a></code> | <code>string</code> | Specifies the type of destination service that the configuration entry applies to. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Specifies the action to take when the source sends traffic to the destination service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#action ConfigEntryServiceIntentions#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Specifies a description of the intention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#description ConfigEntryServiceIntentions#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the source that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the traffic source namespace that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#namespace ConfigEntryServiceIntentions#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the name of an admin partition that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#partition ConfigEntryServiceIntentions#partition}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

Specifies the name of a peered Consul cluster that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#peer ConfigEntryServiceIntentions#peer}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | ConfigEntryServiceIntentionsSourcesPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>[]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#permissions ConfigEntryServiceIntentions#permissions}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

The Precedence field contains a read-only integer.

Consul generates the value based on name configurations for the source and destination services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#precedence ConfigEntryServiceIntentions#precedence}

---

##### `samenessGroup`<sup>Optional</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.samenessGroup"></a>

```typescript
public readonly samenessGroup: string;
```

- *Type:* string

Specifies the name of a sameness group that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#sameness_group ConfigEntryServiceIntentions#sameness_group}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the type of destination service that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#type ConfigEntryServiceIntentions#type}

---

### ConfigEntryServiceIntentionsSourcesPermissions <a name="ConfigEntryServiceIntentionsSourcesPermissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

const configEntryServiceIntentionsSourcesPermissions: configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.action">action</a></code> | <code>string</code> | Specifies the action to take when the source sends traffic to the destination service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.http">http</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>[]</code> | http block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Specifies the action to take when the source sends traffic to the destination service.

The value is either allow or deny.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#action ConfigEntryServiceIntentions#action}

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.http"></a>

```typescript
public readonly http: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>[]

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#http ConfigEntryServiceIntentions#http}

---

### ConfigEntryServiceIntentionsSourcesPermissionsHttp <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttp" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

const configEntryServiceIntentionsSourcesPermissionsHttp: configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.methods">methods</a></code> | <code>string[]</code> | Specifies a list of HTTP methods. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathExact">pathExact</a></code> | <code>string</code> | Specifies an exact path to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | Specifies a path prefix to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathRegex">pathRegex</a></code> | <code>string</code> | Defines a regular expression to match on the HTTP request path. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.headers"></a>

```typescript
public readonly headers: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#headers ConfigEntryServiceIntentions#headers}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

Specifies a list of HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#methods ConfigEntryServiceIntentions#methods}

---

##### `pathExact`<sup>Optional</sup> <a name="pathExact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathExact"></a>

```typescript
public readonly pathExact: string;
```

- *Type:* string

Specifies an exact path to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#path_exact ConfigEntryServiceIntentions#path_exact}

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

Specifies a path prefix to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#path_prefix ConfigEntryServiceIntentions#path_prefix}

---

##### `pathRegex`<sup>Optional</sup> <a name="pathRegex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathRegex"></a>

```typescript
public readonly pathRegex: string;
```

- *Type:* string

Defines a regular expression to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#path_regex ConfigEntryServiceIntentions#path_regex}

---

### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

const configEntryServiceIntentionsSourcesPermissionsHttpHeaders: configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.name">name</a></code> | <code>string</code> | Specifies the name of the header to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.exact">exact</a></code> | <code>string</code> | Specifies a value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | Inverts the matching logic configured in the Header. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.prefix">prefix</a></code> | <code>string</code> | Specifies a prefix value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.present">present</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables a match if the header configured in the Name field appears in the request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.regex">regex</a></code> | <code>string</code> | Specifies a regular expression pattern as the value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.suffix">suffix</a></code> | <code>string</code> | Specifies a suffix value for the header key set in the Name field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the header to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Specifies a value for the header key set in the Name field.

If the request header value matches the Exact value, Consul applies the permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#exact ConfigEntryServiceIntentions#exact}

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Inverts the matching logic configured in the Header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#invert ConfigEntryServiceIntentions#invert}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Specifies a prefix value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#prefix ConfigEntryServiceIntentions#prefix}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.present"></a>

```typescript
public readonly present: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables a match if the header configured in the Name field appears in the request.

Consul matches on any value as long as the header key appears in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#present ConfigEntryServiceIntentions#present}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Specifies a regular expression pattern as the value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#regex ConfigEntryServiceIntentions#regex}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Specifies a suffix value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#suffix ConfigEntryServiceIntentions#suffix}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceIntentionsJwtList <a name="ConfigEntryServiceIntentionsJwtList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceIntentionsJwtOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsJwt[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>[]

---


### ConfigEntryServiceIntentionsJwtOutputReference <a name="ConfigEntryServiceIntentionsJwtOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders">putProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resetProviders">resetProviders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviders` <a name="putProviders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders"></a>

```typescript
public putProviders(value: IResolvable | ConfigEntryServiceIntentionsJwtProviders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>[]

---

##### `resetProviders` <a name="resetProviders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resetProviders"></a>

```typescript
public resetProviders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providers">providers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList">ConfigEntryServiceIntentionsJwtProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providersInput">providersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providers`<sup>Required</sup> <a name="providers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providers"></a>

```typescript
public readonly providers: ConfigEntryServiceIntentionsJwtProvidersList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList">ConfigEntryServiceIntentionsJwtProvidersList</a>

---

##### `providersInput`<sup>Optional</sup> <a name="providersInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providersInput"></a>

```typescript
public readonly providersInput: IResolvable | ConfigEntryServiceIntentionsJwtProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsJwt;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>

---


### ConfigEntryServiceIntentionsJwtProvidersList <a name="ConfigEntryServiceIntentionsJwtProvidersList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceIntentionsJwtProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsJwtProviders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>[]

---


### ConfigEntryServiceIntentionsJwtProvidersOutputReference <a name="ConfigEntryServiceIntentionsJwtProvidersOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims">putVerifyClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetVerifyClaims">resetVerifyClaims</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVerifyClaims` <a name="putVerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims"></a>

```typescript
public putVerifyClaims(value: IResolvable | ConfigEntryServiceIntentionsJwtProvidersVerifyClaims[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>[]

---

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVerifyClaims` <a name="resetVerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetVerifyClaims"></a>

```typescript
public resetVerifyClaims(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaims">verifyClaims</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList">ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaimsInput">verifyClaimsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `verifyClaims`<sup>Required</sup> <a name="verifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaims"></a>

```typescript
public readonly verifyClaims: ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList">ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `verifyClaimsInput`<sup>Optional</sup> <a name="verifyClaimsInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaimsInput"></a>

```typescript
public readonly verifyClaimsInput: IResolvable | ConfigEntryServiceIntentionsJwtProvidersVerifyClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsJwtProviders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>

---


### ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsJwtProvidersVerifyClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>[]

---


### ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.pathInput">pathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.path">path</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string[];
```

- *Type:* string[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.path"></a>

```typescript
public readonly path: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsJwtProvidersVerifyClaims;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>

---


### ConfigEntryServiceIntentionsSourcesList <a name="ConfigEntryServiceIntentionsSourcesList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceIntentionsSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>[]

---


### ConfigEntryServiceIntentionsSourcesOutputReference <a name="ConfigEntryServiceIntentionsSourcesOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPeer">resetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPrecedence">resetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetSamenessGroup">resetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | ConfigEntryServiceIntentionsSourcesPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPeer` <a name="resetPeer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPeer"></a>

```typescript
public resetPeer(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetPrecedence` <a name="resetPrecedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPrecedence"></a>

```typescript
public resetPrecedence(): void
```

##### `resetSamenessGroup` <a name="resetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetSamenessGroup"></a>

```typescript
public resetSamenessGroup(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList">ConfigEntryServiceIntentionsSourcesPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peerInput">peerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedenceInput">precedenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroupInput">samenessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peer">peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedence">precedence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroup">samenessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissions"></a>

```typescript
public readonly permissions: ConfigEntryServiceIntentionsSourcesPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList">ConfigEntryServiceIntentionsSourcesPermissionsList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `peerInput`<sup>Optional</sup> <a name="peerInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peerInput"></a>

```typescript
public readonly peerInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | ConfigEntryServiceIntentionsSourcesPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>[]

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedenceInput"></a>

```typescript
public readonly precedenceInput: number;
```

- *Type:* number

---

##### `samenessGroupInput`<sup>Optional</sup> <a name="samenessGroupInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroupInput"></a>

```typescript
public readonly samenessGroupInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

---

##### `samenessGroup`<sup>Required</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroup"></a>

```typescript
public readonly samenessGroup: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>[]

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPresent">resetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetInvert` <a name="resetInvert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetInvert"></a>

```typescript
public resetInvert(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetPresent` <a name="resetPresent" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPresent"></a>

```typescript
public resetPresent(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invertInput">invertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.presentInput">presentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.present">present</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invertInput"></a>

```typescript
public readonly invertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `presentInput`<sup>Optional</sup> <a name="presentInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.presentInput"></a>

```typescript
public readonly presentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.present"></a>

```typescript
public readonly present: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpList <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>[]

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathExact">resetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathRegex">resetPathRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>[]

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetMethods"></a>

```typescript
public resetMethods(): void
```

##### `resetPathExact` <a name="resetPathExact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathExact"></a>

```typescript
public resetPathExact(): void
```

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathPrefix"></a>

```typescript
public resetPathPrefix(): void
```

##### `resetPathRegex` <a name="resetPathRegex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathRegex"></a>

```typescript
public resetPathRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExactInput">pathExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefixInput">pathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegexInput">pathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExact">pathExact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegex">pathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headers"></a>

```typescript
public readonly headers: ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>[]

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `pathExactInput`<sup>Optional</sup> <a name="pathExactInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExactInput"></a>

```typescript
public readonly pathExactInput: string;
```

- *Type:* string

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefixInput"></a>

```typescript
public readonly pathPrefixInput: string;
```

- *Type:* string

---

##### `pathRegexInput`<sup>Optional</sup> <a name="pathRegexInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegexInput"></a>

```typescript
public readonly pathRegexInput: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `pathExact`<sup>Required</sup> <a name="pathExact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExact"></a>

```typescript
public readonly pathExact: string;
```

- *Type:* string

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `pathRegex`<sup>Required</sup> <a name="pathRegex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegex"></a>

```typescript
public readonly pathRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>

---


### ConfigEntryServiceIntentionsSourcesPermissionsList <a name="ConfigEntryServiceIntentionsSourcesPermissionsList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceIntentionsSourcesPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsSourcesPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>[]

---


### ConfigEntryServiceIntentionsSourcesPermissionsOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceIntentions } from '@cdktf/provider-consul'

new configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp">putHttp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttp` <a name="putHttp" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp"></a>

```typescript
public putHttp(value: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList">ConfigEntryServiceIntentionsSourcesPermissionsHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.httpInput">httpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.http"></a>

```typescript
public readonly http: ConfigEntryServiceIntentionsSourcesPermissionsHttpList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList">ConfigEntryServiceIntentionsSourcesPermissionsHttpList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.httpInput"></a>

```typescript
public readonly httpInput: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceIntentionsSourcesPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>

---




# `consul_prepared_query`

Refer to the Terraform Registory for docs: [`consul_prepared_query`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query).

# `preparedQuery` Submodule <a name="`preparedQuery` Submodule" id="@cdktf/provider-consul.preparedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PreparedQuery <a name="PreparedQuery" id="@cdktf/provider-consul.preparedQuery.PreparedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query consul_prepared_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

new preparedQuery.PreparedQuery(scope: Construct, id: string, config: PreparedQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig">PreparedQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig">PreparedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns">putDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover">putFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetConnect">resetConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetIgnoreCheckIds">resetIgnoreCheckIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNear">resetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNodeMeta">resetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOnlyPassing">resetOnlyPassing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetServiceMeta">resetServiceMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetSession">resetSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetStoredToken">resetStoredToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDns` <a name="putDns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns"></a>

```typescript
public putDns(value: PreparedQueryDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---

##### `putFailover` <a name="putFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover"></a>

```typescript
public putFailover(value: PreparedQueryFailover): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate"></a>

```typescript
public putTemplate(value: PreparedQueryTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---

##### `resetConnect` <a name="resetConnect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetConnect"></a>

```typescript
public resetConnect(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetDns` <a name="resetDns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetFailover` <a name="resetFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetFailover"></a>

```typescript
public resetFailover(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreCheckIds` <a name="resetIgnoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetIgnoreCheckIds"></a>

```typescript
public resetIgnoreCheckIds(): void
```

##### `resetNear` <a name="resetNear" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNear"></a>

```typescript
public resetNear(): void
```

##### `resetNodeMeta` <a name="resetNodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNodeMeta"></a>

```typescript
public resetNodeMeta(): void
```

##### `resetOnlyPassing` <a name="resetOnlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOnlyPassing"></a>

```typescript
public resetOnlyPassing(): void
```

##### `resetServiceMeta` <a name="resetServiceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetServiceMeta"></a>

```typescript
public resetServiceMeta(): void
```

##### `resetSession` <a name="resetSession" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetSession"></a>

```typescript
public resetSession(): void
```

##### `resetStoredToken` <a name="resetStoredToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetStoredToken"></a>

```typescript
public resetStoredToken(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTemplate"></a>

```typescript
public resetTemplate(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PreparedQuery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

preparedQuery.PreparedQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

preparedQuery.PreparedQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

preparedQuery.PreparedQuery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

preparedQuery.PreparedQuery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PreparedQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PreparedQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PreparedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PreparedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference">PreparedQueryDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference">PreparedQueryFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.template">template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference">PreparedQueryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connectInput">connectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dnsInput">dnsInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failoverInput">failoverInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIdsInput">ignoreCheckIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nearInput">nearInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMetaInput">nodeMetaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassingInput">onlyPassingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMetaInput">serviceMetaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.sessionInput">sessionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedTokenInput">storedTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connect">connect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIds">ignoreCheckIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.near">near</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMeta">nodeMeta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassing">onlyPassing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMeta">serviceMeta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.session">session</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedToken">storedToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dns"></a>

```typescript
public readonly dns: PreparedQueryDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference">PreparedQueryDnsOutputReference</a>

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failover"></a>

```typescript
public readonly failover: PreparedQueryFailoverOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference">PreparedQueryFailoverOutputReference</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.template"></a>

```typescript
public readonly template: PreparedQueryTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference">PreparedQueryTemplateOutputReference</a>

---

##### `connectInput`<sup>Optional</sup> <a name="connectInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connectInput"></a>

```typescript
public readonly connectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dnsInput"></a>

```typescript
public readonly dnsInput: PreparedQueryDns;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failoverInput"></a>

```typescript
public readonly failoverInput: PreparedQueryFailover;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreCheckIdsInput`<sup>Optional</sup> <a name="ignoreCheckIdsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIdsInput"></a>

```typescript
public readonly ignoreCheckIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nearInput`<sup>Optional</sup> <a name="nearInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nearInput"></a>

```typescript
public readonly nearInput: string;
```

- *Type:* string

---

##### `nodeMetaInput`<sup>Optional</sup> <a name="nodeMetaInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMetaInput"></a>

```typescript
public readonly nodeMetaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onlyPassingInput`<sup>Optional</sup> <a name="onlyPassingInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassingInput"></a>

```typescript
public readonly onlyPassingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceMetaInput`<sup>Optional</sup> <a name="serviceMetaInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMetaInput"></a>

```typescript
public readonly serviceMetaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sessionInput`<sup>Optional</sup> <a name="sessionInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.sessionInput"></a>

```typescript
public readonly sessionInput: string;
```

- *Type:* string

---

##### `storedTokenInput`<sup>Optional</sup> <a name="storedTokenInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedTokenInput"></a>

```typescript
public readonly storedTokenInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.templateInput"></a>

```typescript
public readonly templateInput: PreparedQueryTemplate;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connect"></a>

```typescript
public readonly connect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreCheckIds`<sup>Required</sup> <a name="ignoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIds"></a>

```typescript
public readonly ignoreCheckIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.near"></a>

```typescript
public readonly near: string;
```

- *Type:* string

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMeta"></a>

```typescript
public readonly nodeMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onlyPassing`<sup>Required</sup> <a name="onlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassing"></a>

```typescript
public readonly onlyPassing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceMeta`<sup>Required</sup> <a name="serviceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMeta"></a>

```typescript
public readonly serviceMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `session`<sup>Required</sup> <a name="session" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.session"></a>

```typescript
public readonly session: string;
```

- *Type:* string

---

##### `storedToken`<sup>Required</sup> <a name="storedToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedToken"></a>

```typescript
public readonly storedToken: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PreparedQueryConfig <a name="PreparedQueryConfig" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

const preparedQueryConfig: preparedQuery.PreparedQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.name">name</a></code> | <code>string</code> | The name of the prepared query. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.service">service</a></code> | <code>string</code> | The name of the service to query. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connect">connect</a></code> | <code>boolean \| cdktf.IResolvable</code> | When `true` the prepared query will return connect proxy services for a queried service. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.datacenter">datacenter</a></code> | <code>string</code> | The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | failover block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#id PreparedQuery#id}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.ignoreCheckIds">ignoreCheckIds</a></code> | <code>string[]</code> | Specifies a list of check IDs that should be ignored when filtering unhealthy instances. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.near">near</a></code> | <code>string</code> | Allows specifying the name of a node to sort results near using Consul's distance sorting and network coordinates. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.nodeMeta">nodeMeta</a></code> | <code>{[ key: string ]: string}</code> | Specifies a list of user-defined key/value pairs that will be used for filtering the query results to nodes with the given metadata values present. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.onlyPassing">onlyPassing</a></code> | <code>boolean \| cdktf.IResolvable</code> | When `true`, the prepared query will only return nodes with passing health checks in the result. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.serviceMeta">serviceMeta</a></code> | <code>{[ key: string ]: string}</code> | Specifies a list of user-defined key/value pairs that will be used for filtering the query results to services with the given metadata values present. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.session">session</a></code> | <code>string</code> | The name of the Consul session to tie this query's lifetime to. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.storedToken">storedToken</a></code> | <code>string</code> | The ACL token to store with the prepared query. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.tags">tags</a></code> | <code>string[]</code> | The list of required and/or disallowed tags. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.token">token</a></code> | <code>string</code> | The ACL token to use when saving the prepared query. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the prepared query.

Used to identify the prepared query during requests. Can be specified as an empty string to configure the query as a catch-all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#name PreparedQuery#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#service PreparedQuery#service}

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connect"></a>

```typescript
public readonly connect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When `true` the prepared query will return connect proxy services for a queried service.

Conditions such as `tags` in the prepared query will be matched against the proxy service. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#connect PreparedQuery#connect}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#datacenter PreparedQuery#datacenter}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dns"></a>

```typescript
public readonly dns: PreparedQueryDns;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#dns PreparedQuery#dns}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.failover"></a>

```typescript
public readonly failover: PreparedQueryFailover;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#failover PreparedQuery#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#id PreparedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreCheckIds`<sup>Optional</sup> <a name="ignoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.ignoreCheckIds"></a>

```typescript
public readonly ignoreCheckIds: string[];
```

- *Type:* string[]

Specifies a list of check IDs that should be ignored when filtering unhealthy instances.

This is mostly useful in an emergency or as a temporary measure when a health check is found to be unreliable. Being able to ignore it in centrally-defined queries can be simpler than de-registering the check as an interim solution until the check can be fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.near"></a>

```typescript
public readonly near: string;
```

- *Type:* string

Allows specifying the name of a node to sort results near using Consul's distance sorting and network coordinates.

The magic `_agent` value can be used to always sort nearest the node servicing the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#near PreparedQuery#near}

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.nodeMeta"></a>

```typescript
public readonly nodeMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a list of user-defined key/value pairs that will be used for filtering the query results to nodes with the given metadata values present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#node_meta PreparedQuery#node_meta}

---

##### `onlyPassing`<sup>Optional</sup> <a name="onlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.onlyPassing"></a>

```typescript
public readonly onlyPassing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When `true`, the prepared query will only return nodes with passing health checks in the result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#only_passing PreparedQuery#only_passing}

---

##### `serviceMeta`<sup>Optional</sup> <a name="serviceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.serviceMeta"></a>

```typescript
public readonly serviceMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a list of user-defined key/value pairs that will be used for filtering the query results to services with the given metadata values present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#service_meta PreparedQuery#service_meta}

---

##### `session`<sup>Optional</sup> <a name="session" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.session"></a>

```typescript
public readonly session: string;
```

- *Type:* string

The name of the Consul session to tie this query's lifetime to.

This is an advanced parameter that should not be used without a complete understanding of Consul sessions and the implications of their use (it is recommended to leave this blank in nearly all cases).  If this parameter is omitted the query will not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#session PreparedQuery#session}

---

##### `storedToken`<sup>Optional</sup> <a name="storedToken" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.storedToken"></a>

```typescript
public readonly storedToken: string;
```

- *Type:* string

The ACL token to store with the prepared query.

This token will be used by default whenever the query is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#stored_token PreparedQuery#stored_token}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The list of required and/or disallowed tags.

If a tag is in this list it must be present.  If the tag is preceded with a "!" then it is disallowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#tags PreparedQuery#tags}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.template"></a>

```typescript
public readonly template: PreparedQueryTemplate;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#template PreparedQuery#template}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The ACL token to use when saving the prepared query.

This overrides the token that the agent provides by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#token PreparedQuery#token}

---

### PreparedQueryDns <a name="PreparedQueryDns" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

const preparedQueryDns: preparedQuery.PreparedQueryDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns.property.ttl">ttl</a></code> | <code>string</code> | The TTL to send when returning DNS results. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL to send when returning DNS results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#ttl PreparedQuery#ttl}

---

### PreparedQueryFailover <a name="PreparedQueryFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

const preparedQueryFailover: preparedQuery.PreparedQueryFailover = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.datacenters">datacenters</a></code> | <code>string[]</code> | Remote datacenters to return results from. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.nearestN">nearestN</a></code> | <code>number</code> | Return results from this many datacenters, sorted in ascending order of estimated RTT. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.targets">targets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a>[]</code> | targets block. |

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.datacenters"></a>

```typescript
public readonly datacenters: string[];
```

- *Type:* string[]

Remote datacenters to return results from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#datacenters PreparedQuery#datacenters}

---

##### `nearestN`<sup>Optional</sup> <a name="nearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.nearestN"></a>

```typescript
public readonly nearestN: number;
```

- *Type:* number

Return results from this many datacenters, sorted in ascending order of estimated RTT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#nearest_n PreparedQuery#nearest_n}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.targets"></a>

```typescript
public readonly targets: IResolvable | PreparedQueryFailoverTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#targets PreparedQuery#targets}

---

### PreparedQueryFailoverTargets <a name="PreparedQueryFailoverTargets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

const preparedQueryFailoverTargets: preparedQuery.PreparedQueryFailoverTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.property.datacenter">datacenter</a></code> | <code>string</code> | Specifies a WAN federated datacenter to forward the query to. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.property.peer">peer</a></code> | <code>string</code> | Specifies a cluster peer to use for failover. |

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Specifies a WAN federated datacenter to forward the query to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#datacenter PreparedQuery#datacenter}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

Specifies a cluster peer to use for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#peer PreparedQuery#peer}

---

### PreparedQueryTemplate <a name="PreparedQueryTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

const preparedQueryTemplate: preparedQuery.PreparedQueryTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.regexp">regexp</a></code> | <code>string</code> | The regular expression to match with. When using `name_prefix_match`, this regex is applied against the query name. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.type">type</a></code> | <code>string</code> | The type of template matching to perform. Currently only `name_prefix_match` is supported. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.removeEmptyTags">removeEmptyTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, will cause the tags list inside the service structure to be stripped of any empty strings. |

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.regexp"></a>

```typescript
public readonly regexp: string;
```

- *Type:* string

The regular expression to match with. When using `name_prefix_match`, this regex is applied against the query name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#regexp PreparedQuery#regexp}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of template matching to perform. Currently only `name_prefix_match` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#type PreparedQuery#type}

---

##### `removeEmptyTags`<sup>Optional</sup> <a name="removeEmptyTags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.removeEmptyTags"></a>

```typescript
public readonly removeEmptyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, will cause the tags list inside the service structure to be stripped of any empty strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#remove_empty_tags PreparedQuery#remove_empty_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### PreparedQueryDnsOutputReference <a name="PreparedQueryDnsOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

new preparedQuery.PreparedQueryDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PreparedQueryDns;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---


### PreparedQueryFailoverOutputReference <a name="PreparedQueryFailoverOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

new preparedQuery.PreparedQueryFailoverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetDatacenters">resetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetNearestN">resetNearestN</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.putTargets"></a>

```typescript
public putTargets(value: IResolvable | PreparedQueryFailoverTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a>[]

---

##### `resetDatacenters` <a name="resetDatacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetDatacenters"></a>

```typescript
public resetDatacenters(): void
```

##### `resetNearestN` <a name="resetNearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetNearestN"></a>

```typescript
public resetNearestN(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetTargets"></a>

```typescript
public resetTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList">PreparedQueryFailoverTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacentersInput">datacentersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestNInput">nearestNInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacenters">datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestN">nearestN</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.targets"></a>

```typescript
public readonly targets: PreparedQueryFailoverTargetsList;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList">PreparedQueryFailoverTargetsList</a>

---

##### `datacentersInput`<sup>Optional</sup> <a name="datacentersInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacentersInput"></a>

```typescript
public readonly datacentersInput: string[];
```

- *Type:* string[]

---

##### `nearestNInput`<sup>Optional</sup> <a name="nearestNInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestNInput"></a>

```typescript
public readonly nearestNInput: number;
```

- *Type:* number

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | PreparedQueryFailoverTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a>[]

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacenters"></a>

```typescript
public readonly datacenters: string[];
```

- *Type:* string[]

---

##### `nearestN`<sup>Required</sup> <a name="nearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestN"></a>

```typescript
public readonly nearestN: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PreparedQueryFailover;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---


### PreparedQueryFailoverTargetsList <a name="PreparedQueryFailoverTargetsList" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

new preparedQuery.PreparedQueryFailoverTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.get"></a>

```typescript
public get(index: number): PreparedQueryFailoverTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PreparedQueryFailoverTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a>[]

---


### PreparedQueryFailoverTargetsOutputReference <a name="PreparedQueryFailoverTargetsOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

new preparedQuery.PreparedQueryFailoverTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resetPeer">resetPeer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetPeer` <a name="resetPeer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resetPeer"></a>

```typescript
public resetPeer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.peerInput">peerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.peer">peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `peerInput`<sup>Optional</sup> <a name="peerInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.peerInput"></a>

```typescript
public readonly peerInput: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PreparedQueryFailoverTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets">PreparedQueryFailoverTargets</a>

---


### PreparedQueryTemplateOutputReference <a name="PreparedQueryTemplateOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer"></a>

```typescript
import { preparedQuery } from '@cdktf/provider-consul'

new preparedQuery.PreparedQueryTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resetRemoveEmptyTags">resetRemoveEmptyTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRemoveEmptyTags` <a name="resetRemoveEmptyTags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resetRemoveEmptyTags"></a>

```typescript
public resetRemoveEmptyTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexpInput">regexpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.removeEmptyTagsInput">removeEmptyTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexp">regexp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.removeEmptyTags">removeEmptyTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexpInput`<sup>Optional</sup> <a name="regexpInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexpInput"></a>

```typescript
public readonly regexpInput: string;
```

- *Type:* string

---

##### `removeEmptyTagsInput`<sup>Optional</sup> <a name="removeEmptyTagsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.removeEmptyTagsInput"></a>

```typescript
public readonly removeEmptyTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexp"></a>

```typescript
public readonly regexp: string;
```

- *Type:* string

---

##### `removeEmptyTags`<sup>Required</sup> <a name="removeEmptyTags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.removeEmptyTags"></a>

```typescript
public readonly removeEmptyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PreparedQueryTemplate;
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---




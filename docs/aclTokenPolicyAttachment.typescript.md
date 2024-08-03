# `aclTokenPolicyAttachment` Submodule <a name="`aclTokenPolicyAttachment` Submodule" id="@cdktf/provider-consul.aclTokenPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclTokenPolicyAttachment <a name="AclTokenPolicyAttachment" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/acl_token_policy_attachment consul_acl_token_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.Initializer"></a>

```typescript
import { aclTokenPolicyAttachment } from '@cdktf/provider-consul'

new aclTokenPolicyAttachment.AclTokenPolicyAttachment(scope: Construct, id: string, config: AclTokenPolicyAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig">AclTokenPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig">AclTokenPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AclTokenPolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isConstruct"></a>

```typescript
import { aclTokenPolicyAttachment } from '@cdktf/provider-consul'

aclTokenPolicyAttachment.AclTokenPolicyAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isTerraformElement"></a>

```typescript
import { aclTokenPolicyAttachment } from '@cdktf/provider-consul'

aclTokenPolicyAttachment.AclTokenPolicyAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isTerraformResource"></a>

```typescript
import { aclTokenPolicyAttachment } from '@cdktf/provider-consul'

aclTokenPolicyAttachment.AclTokenPolicyAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.generateConfigForImport"></a>

```typescript
import { aclTokenPolicyAttachment } from '@cdktf/provider-consul'

aclTokenPolicyAttachment.AclTokenPolicyAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AclTokenPolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AclTokenPolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AclTokenPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/acl_token_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AclTokenPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.tokenIdInput">tokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.tokenId">tokenId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `tokenIdInput`<sup>Optional</sup> <a name="tokenIdInput" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.tokenIdInput"></a>

```typescript
public readonly tokenIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AclTokenPolicyAttachmentConfig <a name="AclTokenPolicyAttachmentConfig" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.Initializer"></a>

```typescript
import { aclTokenPolicyAttachment } from '@cdktf/provider-consul'

const aclTokenPolicyAttachmentConfig: aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.policy">policy</a></code> | <code>string</code> | The policy name. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.tokenId">tokenId</a></code> | <code>string</code> | The token accessor id. |
| <code><a href="#@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/acl_token_policy_attachment#id AclTokenPolicyAttachment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

The policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/acl_token_policy_attachment#policy AclTokenPolicyAttachment#policy}

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

The token accessor id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/acl_token_policy_attachment#token_id AclTokenPolicyAttachment#token_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclTokenPolicyAttachment.AclTokenPolicyAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/acl_token_policy_attachment#id AclTokenPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




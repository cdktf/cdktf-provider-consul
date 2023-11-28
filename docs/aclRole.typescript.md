# `aclRole` Submodule <a name="`aclRole` Submodule" id="@cdktf/provider-consul.aclRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclRole <a name="AclRole" id="@cdktf/provider-consul.aclRole.AclRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role consul_acl_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRole.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

new aclRole.AclRole(scope: Construct, id: string, config: AclRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig">AclRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleConfig">AclRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.putNodeIdentities">putNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.putServiceIdentities">putServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.putTemplatedPolicies">putTemplatedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetNodeIdentities">resetNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetServiceIdentities">resetServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetTemplatedPolicies">resetTemplatedPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclRole.AclRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.aclRole.AclRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclRole.AclRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclRole.AclRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.aclRole.AclRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.aclRole.AclRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.aclRole.AclRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.aclRole.AclRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.aclRole.AclRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.aclRole.AclRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclRole.AclRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.aclRole.AclRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclRole.AclRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclRole.AclRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclRole.AclRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.aclRole.AclRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclRole.AclRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclRole.AclRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putNodeIdentities` <a name="putNodeIdentities" id="@cdktf/provider-consul.aclRole.AclRole.putNodeIdentities"></a>

```typescript
public putNodeIdentities(value: IResolvable | AclRoleNodeIdentities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclRole.AclRole.putNodeIdentities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a>[]

---

##### `putServiceIdentities` <a name="putServiceIdentities" id="@cdktf/provider-consul.aclRole.AclRole.putServiceIdentities"></a>

```typescript
public putServiceIdentities(value: IResolvable | AclRoleServiceIdentities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclRole.AclRole.putServiceIdentities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a>[]

---

##### `putTemplatedPolicies` <a name="putTemplatedPolicies" id="@cdktf/provider-consul.aclRole.AclRole.putTemplatedPolicies"></a>

```typescript
public putTemplatedPolicies(value: IResolvable | AclRoleTemplatedPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclRole.AclRole.putTemplatedPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-consul.aclRole.AclRole.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.aclRole.AclRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.aclRole.AclRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNodeIdentities` <a name="resetNodeIdentities" id="@cdktf/provider-consul.aclRole.AclRole.resetNodeIdentities"></a>

```typescript
public resetNodeIdentities(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.aclRole.AclRole.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-consul.aclRole.AclRole.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetServiceIdentities` <a name="resetServiceIdentities" id="@cdktf/provider-consul.aclRole.AclRole.resetServiceIdentities"></a>

```typescript
public resetServiceIdentities(): void
```

##### `resetTemplatedPolicies` <a name="resetTemplatedPolicies" id="@cdktf/provider-consul.aclRole.AclRole.resetTemplatedPolicies"></a>

```typescript
public resetTemplatedPolicies(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AclRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.aclRole.AclRole.isConstruct"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

aclRole.AclRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclRole.AclRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.aclRole.AclRole.isTerraformElement"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

aclRole.AclRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclRole.AclRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.aclRole.AclRole.isTerraformResource"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

aclRole.AclRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclRole.AclRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.aclRole.AclRole.generateConfigForImport"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

aclRole.AclRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AclRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclRole.AclRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.aclRole.AclRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AclRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.aclRole.AclRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AclRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclRole.AclRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AclRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.nodeIdentities">nodeIdentities</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList">AclRoleNodeIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.serviceIdentities">serviceIdentities</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList">AclRoleServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.templatedPolicies">templatedPolicies</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList">AclRoleTemplatedPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.nodeIdentitiesInput">nodeIdentitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.serviceIdentitiesInput">serviceIdentitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.templatedPoliciesInput">templatedPoliciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclRole.AclRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.aclRole.AclRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclRole.AclRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.aclRole.AclRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.aclRole.AclRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.aclRole.AclRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.aclRole.AclRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclRole.AclRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclRole.AclRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclRole.AclRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclRole.AclRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclRole.AclRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclRole.AclRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclRole.AclRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `nodeIdentities`<sup>Required</sup> <a name="nodeIdentities" id="@cdktf/provider-consul.aclRole.AclRole.property.nodeIdentities"></a>

```typescript
public readonly nodeIdentities: AclRoleNodeIdentitiesList;
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList">AclRoleNodeIdentitiesList</a>

---

##### `serviceIdentities`<sup>Required</sup> <a name="serviceIdentities" id="@cdktf/provider-consul.aclRole.AclRole.property.serviceIdentities"></a>

```typescript
public readonly serviceIdentities: AclRoleServiceIdentitiesList;
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList">AclRoleServiceIdentitiesList</a>

---

##### `templatedPolicies`<sup>Required</sup> <a name="templatedPolicies" id="@cdktf/provider-consul.aclRole.AclRole.property.templatedPolicies"></a>

```typescript
public readonly templatedPolicies: AclRoleTemplatedPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList">AclRoleTemplatedPoliciesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-consul.aclRole.AclRole.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.aclRole.AclRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.aclRole.AclRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.aclRole.AclRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `nodeIdentitiesInput`<sup>Optional</sup> <a name="nodeIdentitiesInput" id="@cdktf/provider-consul.aclRole.AclRole.property.nodeIdentitiesInput"></a>

```typescript
public readonly nodeIdentitiesInput: IResolvable | AclRoleNodeIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a>[]

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.aclRole.AclRole.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-consul.aclRole.AclRole.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `serviceIdentitiesInput`<sup>Optional</sup> <a name="serviceIdentitiesInput" id="@cdktf/provider-consul.aclRole.AclRole.property.serviceIdentitiesInput"></a>

```typescript
public readonly serviceIdentitiesInput: IResolvable | AclRoleServiceIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a>[]

---

##### `templatedPoliciesInput`<sup>Optional</sup> <a name="templatedPoliciesInput" id="@cdktf/provider-consul.aclRole.AclRole.property.templatedPoliciesInput"></a>

```typescript
public readonly templatedPoliciesInput: IResolvable | AclRoleTemplatedPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.aclRole.AclRole.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclRole.AclRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclRole.AclRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.aclRole.AclRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.aclRole.AclRole.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-consul.aclRole.AclRole.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclRole.AclRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AclRoleConfig <a name="AclRoleConfig" id="@cdktf/provider-consul.aclRole.AclRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclRole.AclRoleConfig.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

const aclRoleConfig: aclRole.AclRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.name">name</a></code> | <code>string</code> | The name of the ACL role. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.description">description</a></code> | <code>string</code> | A free form human readable description of the role. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#id AclRole#id}. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace to create the role within. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.nodeIdentities">nodeIdentities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a>[]</code> | node_identities block. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.partition">partition</a></code> | <code>string</code> | The partition the ACL role is associated with. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.policies">policies</a></code> | <code>string[]</code> | The list of policies that should be applied to the role. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.serviceIdentities">serviceIdentities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a>[]</code> | service_identities block. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.templatedPolicies">templatedPolicies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a>[]</code> | templated_policies block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ACL role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#name AclRole#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free form human readable description of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#description AclRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#id AclRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace to create the role within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#namespace AclRole#namespace}

---

##### `nodeIdentities`<sup>Optional</sup> <a name="nodeIdentities" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.nodeIdentities"></a>

```typescript
public readonly nodeIdentities: IResolvable | AclRoleNodeIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a>[]

node_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#node_identities AclRole#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition the ACL role is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#partition AclRole#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

The list of policies that should be applied to the role.

Both the policy ID or its name can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#policies AclRole#policies}

---

##### `serviceIdentities`<sup>Optional</sup> <a name="serviceIdentities" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.serviceIdentities"></a>

```typescript
public readonly serviceIdentities: IResolvable | AclRoleServiceIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a>[]

service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#service_identities AclRole#service_identities}

---

##### `templatedPolicies`<sup>Optional</sup> <a name="templatedPolicies" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.templatedPolicies"></a>

```typescript
public readonly templatedPolicies: IResolvable | AclRoleTemplatedPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a>[]

templated_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#templated_policies AclRole#templated_policies}

---

### AclRoleNodeIdentities <a name="AclRoleNodeIdentities" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

const aclRoleNodeIdentities: aclRole.AclRoleNodeIdentities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.property.datacenter">datacenter</a></code> | <code>string</code> | Specifies the node's datacenter. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.property.nodeName">nodeName</a></code> | <code>string</code> | The name of the node. |

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Specifies the node's datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#datacenter AclRole#datacenter}

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

The name of the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#node_name AclRole#node_name}

---

### AclRoleServiceIdentities <a name="AclRoleServiceIdentities" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

const aclRoleServiceIdentities: aclRole.AclRoleServiceIdentities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.property.datacenters">datacenters</a></code> | <code>string[]</code> | The datacenters the effective policy is valid within. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#service_name AclRole#service_name}

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.property.datacenters"></a>

```typescript
public readonly datacenters: string[];
```

- *Type:* string[]

The datacenters the effective policy is valid within.

When no datacenters are provided the effective policy is valid in all datacenters including those which do not yet exist but may in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#datacenters AclRole#datacenters}

---

### AclRoleTemplatedPolicies <a name="AclRoleTemplatedPolicies" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

const aclRoleTemplatedPolicies: aclRole.AclRoleTemplatedPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies.property.templateName">templateName</a></code> | <code>string</code> | The name of the templated policies. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies.property.datacenters">datacenters</a></code> | <code>string[]</code> | Specifies the datacenters the effective policy is valid within. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies.property.templateVariables">templateVariables</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables">AclRoleTemplatedPoliciesTemplateVariables</a></code> | template_variables block. |

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The name of the templated policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#template_name AclRole#template_name}

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies.property.datacenters"></a>

```typescript
public readonly datacenters: string[];
```

- *Type:* string[]

Specifies the datacenters the effective policy is valid within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#datacenters AclRole#datacenters}

---

##### `templateVariables`<sup>Optional</sup> <a name="templateVariables" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies.property.templateVariables"></a>

```typescript
public readonly templateVariables: AclRoleTemplatedPoliciesTemplateVariables;
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables">AclRoleTemplatedPoliciesTemplateVariables</a>

template_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#template_variables AclRole#template_variables}

---

### AclRoleTemplatedPoliciesTemplateVariables <a name="AclRoleTemplatedPoliciesTemplateVariables" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

const aclRoleTemplatedPoliciesTemplateVariables: aclRole.AclRoleTemplatedPoliciesTemplateVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables.property.name">name</a></code> | <code>string</code> | The name of node, workload identity or service. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of node, workload identity or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#name AclRole#name}

---

## Classes <a name="Classes" id="Classes"></a>

### AclRoleNodeIdentitiesList <a name="AclRoleNodeIdentitiesList" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

new aclRole.AclRoleNodeIdentitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.get"></a>

```typescript
public get(index: number): AclRoleNodeIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AclRoleNodeIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a>[]

---


### AclRoleNodeIdentitiesOutputReference <a name="AclRoleNodeIdentitiesOutputReference" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

new aclRole.AclRoleNodeIdentitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.nodeNameInput">nodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.nodeName">nodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `nodeNameInput`<sup>Optional</sup> <a name="nodeNameInput" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.nodeNameInput"></a>

```typescript
public readonly nodeNameInput: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AclRoleNodeIdentities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities">AclRoleNodeIdentities</a>

---


### AclRoleServiceIdentitiesList <a name="AclRoleServiceIdentitiesList" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

new aclRole.AclRoleServiceIdentitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.get"></a>

```typescript
public get(index: number): AclRoleServiceIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AclRoleServiceIdentities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a>[]

---


### AclRoleServiceIdentitiesOutputReference <a name="AclRoleServiceIdentitiesOutputReference" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

new aclRole.AclRoleServiceIdentitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resetDatacenters">resetDatacenters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatacenters` <a name="resetDatacenters" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resetDatacenters"></a>

```typescript
public resetDatacenters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.datacentersInput">datacentersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.datacenters">datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datacentersInput`<sup>Optional</sup> <a name="datacentersInput" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.datacentersInput"></a>

```typescript
public readonly datacentersInput: string[];
```

- *Type:* string[]

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.datacenters"></a>

```typescript
public readonly datacenters: string[];
```

- *Type:* string[]

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AclRoleServiceIdentities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities">AclRoleServiceIdentities</a>

---


### AclRoleTemplatedPoliciesList <a name="AclRoleTemplatedPoliciesList" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

new aclRole.AclRoleTemplatedPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.get"></a>

```typescript
public get(index: number): AclRoleTemplatedPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AclRoleTemplatedPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a>[]

---


### AclRoleTemplatedPoliciesOutputReference <a name="AclRoleTemplatedPoliciesOutputReference" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

new aclRole.AclRoleTemplatedPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.putTemplateVariables">putTemplateVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.resetDatacenters">resetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.resetTemplateVariables">resetTemplateVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTemplateVariables` <a name="putTemplateVariables" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.putTemplateVariables"></a>

```typescript
public putTemplateVariables(value: AclRoleTemplatedPoliciesTemplateVariables): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.putTemplateVariables.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables">AclRoleTemplatedPoliciesTemplateVariables</a>

---

##### `resetDatacenters` <a name="resetDatacenters" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.resetDatacenters"></a>

```typescript
public resetDatacenters(): void
```

##### `resetTemplateVariables` <a name="resetTemplateVariables" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.resetTemplateVariables"></a>

```typescript
public resetTemplateVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.templateVariables">templateVariables</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference">AclRoleTemplatedPoliciesTemplateVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.datacentersInput">datacentersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.templateVariablesInput">templateVariablesInput</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables">AclRoleTemplatedPoliciesTemplateVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.datacenters">datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateVariables`<sup>Required</sup> <a name="templateVariables" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.templateVariables"></a>

```typescript
public readonly templateVariables: AclRoleTemplatedPoliciesTemplateVariablesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference">AclRoleTemplatedPoliciesTemplateVariablesOutputReference</a>

---

##### `datacentersInput`<sup>Optional</sup> <a name="datacentersInput" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.datacentersInput"></a>

```typescript
public readonly datacentersInput: string[];
```

- *Type:* string[]

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `templateVariablesInput`<sup>Optional</sup> <a name="templateVariablesInput" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.templateVariablesInput"></a>

```typescript
public readonly templateVariablesInput: AclRoleTemplatedPoliciesTemplateVariables;
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables">AclRoleTemplatedPoliciesTemplateVariables</a>

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.datacenters"></a>

```typescript
public readonly datacenters: string[];
```

- *Type:* string[]

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AclRoleTemplatedPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPolicies">AclRoleTemplatedPolicies</a>

---


### AclRoleTemplatedPoliciesTemplateVariablesOutputReference <a name="AclRoleTemplatedPoliciesTemplateVariablesOutputReference" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer"></a>

```typescript
import { aclRole } from '@cdktf/provider-consul'

new aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables">AclRoleTemplatedPoliciesTemplateVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AclRoleTemplatedPoliciesTemplateVariables;
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleTemplatedPoliciesTemplateVariables">AclRoleTemplatedPoliciesTemplateVariables</a>

---




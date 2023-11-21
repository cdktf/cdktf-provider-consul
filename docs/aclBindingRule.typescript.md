# `consul_acl_binding_rule`

Refer to the Terraform Registory for docs: [`consul_acl_binding_rule`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule).

# `aclBindingRule` Submodule <a name="`aclBindingRule` Submodule" id="@cdktf/provider-consul.aclBindingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclBindingRule <a name="AclBindingRule" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule consul_acl_binding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer"></a>

```typescript
import { aclBindingRule } from '@cdktf/provider-consul'

new aclBindingRule.AclBindingRule(scope: Construct, id: string, config: AclBindingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig">AclBindingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig">AclBindingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.putBindVars">putBindVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetBindVars">resetBindVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putBindVars` <a name="putBindVars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.putBindVars"></a>

```typescript
public putBindVars(value: AclBindingRuleBindVars): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.putBindVars.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a>

---

##### `resetBindVars` <a name="resetBindVars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetBindVars"></a>

```typescript
public resetBindVars(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetSelector"></a>

```typescript
public resetSelector(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AclBindingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isConstruct"></a>

```typescript
import { aclBindingRule } from '@cdktf/provider-consul'

aclBindingRule.AclBindingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformElement"></a>

```typescript
import { aclBindingRule } from '@cdktf/provider-consul'

aclBindingRule.AclBindingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformResource"></a>

```typescript
import { aclBindingRule } from '@cdktf/provider-consul'

aclBindingRule.AclBindingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport"></a>

```typescript
import { aclBindingRule } from '@cdktf/provider-consul'

aclBindingRule.AclBindingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AclBindingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AclBindingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AclBindingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AclBindingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindVars">bindVars</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference">AclBindingRuleBindVarsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.authMethodInput">authMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindNameInput">bindNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindTypeInput">bindTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindVarsInput">bindVarsInput</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.authMethod">authMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindName">bindName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindType">bindType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.selector">selector</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bindVars`<sup>Required</sup> <a name="bindVars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindVars"></a>

```typescript
public readonly bindVars: AclBindingRuleBindVarsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference">AclBindingRuleBindVarsOutputReference</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.authMethodInput"></a>

```typescript
public readonly authMethodInput: string;
```

- *Type:* string

---

##### `bindNameInput`<sup>Optional</sup> <a name="bindNameInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindNameInput"></a>

```typescript
public readonly bindNameInput: string;
```

- *Type:* string

---

##### `bindTypeInput`<sup>Optional</sup> <a name="bindTypeInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindTypeInput"></a>

```typescript
public readonly bindTypeInput: string;
```

- *Type:* string

---

##### `bindVarsInput`<sup>Optional</sup> <a name="bindVarsInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindVarsInput"></a>

```typescript
public readonly bindVarsInput: AclBindingRuleBindVars;
```

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

---

##### `bindName`<sup>Required</sup> <a name="bindName" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindName"></a>

```typescript
public readonly bindName: string;
```

- *Type:* string

---

##### `bindType`<sup>Required</sup> <a name="bindType" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindType"></a>

```typescript
public readonly bindType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AclBindingRuleBindVars <a name="AclBindingRuleBindVars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars.Initializer"></a>

```typescript
import { aclBindingRule } from '@cdktf/provider-consul'

const aclBindingRuleBindVars: aclBindingRule.AclBindingRuleBindVars = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars.property.name">name</a></code> | <code>string</code> | The name of node, workload identity or service. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of node, workload identity or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#name AclBindingRule#name}

---

### AclBindingRuleConfig <a name="AclBindingRuleConfig" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.Initializer"></a>

```typescript
import { aclBindingRule } from '@cdktf/provider-consul'

const aclBindingRuleConfig: aclBindingRule.AclBindingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.authMethod">authMethod</a></code> | <code>string</code> | The name of the ACL auth method this rule apply. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindName">bindName</a></code> | <code>string</code> | The name to bind to a token at login-time. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindType">bindType</a></code> | <code>string</code> | Specifies the way the binding rule affects a token created at login. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindVars">bindVars</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a></code> | bind_vars block. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.description">description</a></code> | <code>string</code> | A free form human readable description of the binding rule. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#id AclBindingRule#id}. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace to create the binding rule within. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.partition">partition</a></code> | <code>string</code> | The partition the ACL binding rule is associated with. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.selector">selector</a></code> | <code>string</code> | The expression used to match this rule against valid identities returned from an auth method validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

The name of the ACL auth method this rule apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#auth_method AclBindingRule#auth_method}

---

##### `bindName`<sup>Required</sup> <a name="bindName" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindName"></a>

```typescript
public readonly bindName: string;
```

- *Type:* string

The name to bind to a token at login-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#bind_name AclBindingRule#bind_name}

---

##### `bindType`<sup>Required</sup> <a name="bindType" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindType"></a>

```typescript
public readonly bindType: string;
```

- *Type:* string

Specifies the way the binding rule affects a token created at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#bind_type AclBindingRule#bind_type}

---

##### `bindVars`<sup>Optional</sup> <a name="bindVars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindVars"></a>

```typescript
public readonly bindVars: AclBindingRuleBindVars;
```

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a>

bind_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#bind_vars AclBindingRule#bind_vars}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free form human readable description of the binding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#description AclBindingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#id AclBindingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace to create the binding rule within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#namespace AclBindingRule#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition the ACL binding rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#partition AclBindingRule#partition}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

The expression used to match this rule against valid identities returned from an auth method validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_binding_rule#selector AclBindingRule#selector}

---

## Classes <a name="Classes" id="Classes"></a>

### AclBindingRuleBindVarsOutputReference <a name="AclBindingRuleBindVarsOutputReference" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer"></a>

```typescript
import { aclBindingRule } from '@cdktf/provider-consul'

new aclBindingRule.AclBindingRuleBindVarsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AclBindingRuleBindVars;
```

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a>

---




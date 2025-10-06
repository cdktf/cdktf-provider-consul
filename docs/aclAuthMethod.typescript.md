# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-consul.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method consul_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

new aclAuthMethod.AclAuthMethod(scope: Construct, id: string, config: AclAuthMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule">putNamespaceRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfigJson">resetConfigJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetMaxTokenTtl">resetMaxTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespaceRule">resetNamespaceRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetTokenLocality">resetTokenLocality</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNamespaceRule` <a name="putNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule"></a>

```typescript
public putNamespaceRule(value: IResolvable | AclAuthMethodNamespaceRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>[]

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetConfigJson` <a name="resetConfigJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfigJson"></a>

```typescript
public resetConfigJson(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxTokenTtl` <a name="resetMaxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetMaxTokenTtl"></a>

```typescript
public resetMaxTokenTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNamespaceRule` <a name="resetNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespaceRule"></a>

```typescript
public resetNamespaceRule(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetTokenLocality` <a name="resetTokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetTokenLocality"></a>

```typescript
public resetTokenLocality(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

aclAuthMethod.AclAuthMethod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

aclAuthMethod.AclAuthMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

aclAuthMethod.AclAuthMethod.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

aclAuthMethod.AclAuthMethod.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AclAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AclAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AclAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRule">namespaceRule</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList">AclAuthMethodNamespaceRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configInput">configInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJsonInput">configJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput">maxTokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRuleInput">namespaceRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput">tokenLocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJson">configJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtl">maxTokenTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocality">tokenLocality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespaceRule`<sup>Required</sup> <a name="namespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRule"></a>

```typescript
public readonly namespaceRule: AclAuthMethodNamespaceRuleList;
```

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList">AclAuthMethodNamespaceRuleList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configInput"></a>

```typescript
public readonly configInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `configJsonInput`<sup>Optional</sup> <a name="configJsonInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJsonInput"></a>

```typescript
public readonly configJsonInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxTokenTtlInput`<sup>Optional</sup> <a name="maxTokenTtlInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput"></a>

```typescript
public readonly maxTokenTtlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespaceRuleInput`<sup>Optional</sup> <a name="namespaceRuleInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRuleInput"></a>

```typescript
public readonly namespaceRuleInput: IResolvable | AclAuthMethodNamespaceRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>[]

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `tokenLocalityInput`<sup>Optional</sup> <a name="tokenLocalityInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput"></a>

```typescript
public readonly tokenLocalityInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `configJson`<sup>Required</sup> <a name="configJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJson"></a>

```typescript
public readonly configJson: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtl"></a>

```typescript
public readonly maxTokenTtl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `tokenLocality`<sup>Required</sup> <a name="tokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocality"></a>

```typescript
public readonly tokenLocality: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AclAuthMethodConfig <a name="AclAuthMethodConfig" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

const aclAuthMethodConfig: aclAuthMethod.AclAuthMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.name">name</a></code> | <code>string</code> | The name of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.type">type</a></code> | <code>string</code> | The type of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.configJson">configJson</a></code> | <code>string</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.description">description</a></code> | <code>string</code> | A free form human readable description of the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.displayName">displayName</a></code> | <code>string</code> | An optional name to use instead of the name attribute when displaying information about this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl">maxTokenTtl</a></code> | <code>string</code> | The maximum life of any token created by this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace in which to create the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespaceRule">namespaceRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>[]</code> | namespace_rule block. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.partition">partition</a></code> | <code>string</code> | The partition the ACL auth method is associated with. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality">tokenLocality</a></code> | <code>string</code> | The kind of token that this auth method produces. This can be either 'local' or 'global'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `configJson`<sup>Optional</sup> <a name="configJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.configJson"></a>

```typescript
public readonly configJson: string;
```

- *Type:* string

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config_json AclAuthMethod#config_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free form human readable description of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#description AclAuthMethod#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

An optional name to use instead of the name attribute when displaying information about this auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#display_name AclAuthMethod#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTokenTtl`<sup>Optional</sup> <a name="maxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```typescript
public readonly maxTokenTtl: string;
```

- *Type:* string

The maximum life of any token created by this auth method.

**This attribute is required and must be set to a nonzero for the OIDC auth method.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace in which to create the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace AclAuthMethod#namespace}

---

##### `namespaceRule`<sup>Optional</sup> <a name="namespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespaceRule"></a>

```typescript
public readonly namespaceRule: IResolvable | AclAuthMethodNamespaceRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>[]

namespace_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace_rule AclAuthMethod#namespace_rule}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition the ACL auth method is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#partition AclAuthMethod#partition}

---

##### `tokenLocality`<sup>Optional</sup> <a name="tokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```typescript
public readonly tokenLocality: string;
```

- *Type:* string

The kind of token that this auth method produces. This can be either 'local' or 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

### AclAuthMethodNamespaceRule <a name="AclAuthMethodNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

const aclAuthMethodNamespaceRule: aclAuthMethod.AclAuthMethodNamespaceRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.bindNamespace">bindNamespace</a></code> | <code>string</code> | If the namespace rule's `selector` matches then this is used to control the namespace where the token is created. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.selector">selector</a></code> | <code>string</code> | Specifies the expression used to match this namespace rule against valid identities returned from an auth method validation. |

---

##### `bindNamespace`<sup>Required</sup> <a name="bindNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.bindNamespace"></a>

```typescript
public readonly bindNamespace: string;
```

- *Type:* string

If the namespace rule's `selector` matches then this is used to control the namespace where the token is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#bind_namespace AclAuthMethod#bind_namespace}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Specifies the expression used to match this namespace rule against valid identities returned from an auth method validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#selector AclAuthMethod#selector}

---

## Classes <a name="Classes" id="Classes"></a>

### AclAuthMethodNamespaceRuleList <a name="AclAuthMethodNamespaceRuleList" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

new aclAuthMethod.AclAuthMethodNamespaceRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get"></a>

```typescript
public get(index: number): AclAuthMethodNamespaceRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AclAuthMethodNamespaceRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>[]

---


### AclAuthMethodNamespaceRuleOutputReference <a name="AclAuthMethodNamespaceRuleOutputReference" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-consul'

new aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespaceInput">bindNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespace">bindNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bindNamespaceInput`<sup>Optional</sup> <a name="bindNamespaceInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespaceInput"></a>

```typescript
public readonly bindNamespaceInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `bindNamespace`<sup>Required</sup> <a name="bindNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespace"></a>

```typescript
public readonly bindNamespace: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AclAuthMethodNamespaceRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a> | cdktf.IResolvable

---




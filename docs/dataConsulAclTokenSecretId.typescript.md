# `data_consul_acl_token_secret_id`

Refer to the Terraform Registory for docs: [`data_consul_acl_token_secret_id`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id).

# `dataConsulAclTokenSecretId` Submodule <a name="`dataConsulAclTokenSecretId` Submodule" id="@cdktf/provider-consul.dataConsulAclTokenSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAclTokenSecretId <a name="DataConsulAclTokenSecretId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id consul_acl_token_secret_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer"></a>

```typescript
import { dataConsulAclTokenSecretId } from '@cdktf/provider-consul'

new dataConsulAclTokenSecretId.DataConsulAclTokenSecretId(scope: Construct, id: string, config: DataConsulAclTokenSecretIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig">DataConsulAclTokenSecretIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig">DataConsulAclTokenSecretIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetPgpKey">resetPgpKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPgpKey` <a name="resetPgpKey" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetPgpKey"></a>

```typescript
public resetPgpKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulAclTokenSecretId resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isConstruct"></a>

```typescript
import { dataConsulAclTokenSecretId } from '@cdktf/provider-consul'

dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformElement"></a>

```typescript
import { dataConsulAclTokenSecretId } from '@cdktf/provider-consul'

dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformDataSource"></a>

```typescript
import { dataConsulAclTokenSecretId } from '@cdktf/provider-consul'

dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.generateConfigForImport"></a>

```typescript
import { dataConsulAclTokenSecretId } from '@cdktf/provider-consul'

dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataConsulAclTokenSecretId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulAclTokenSecretId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulAclTokenSecretId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulAclTokenSecretId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.encryptedSecretId">encryptedSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.accessorIdInput">accessorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.pgpKeyInput">pgpKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.accessorId">accessorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.pgpKey">pgpKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `encryptedSecretId`<sup>Required</sup> <a name="encryptedSecretId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.encryptedSecretId"></a>

```typescript
public readonly encryptedSecretId: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `accessorIdInput`<sup>Optional</sup> <a name="accessorIdInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.accessorIdInput"></a>

```typescript
public readonly accessorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `pgpKeyInput`<sup>Optional</sup> <a name="pgpKeyInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.pgpKeyInput"></a>

```typescript
public readonly pgpKeyInput: string;
```

- *Type:* string

---

##### `accessorId`<sup>Required</sup> <a name="accessorId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.accessorId"></a>

```typescript
public readonly accessorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `pgpKey`<sup>Required</sup> <a name="pgpKey" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.pgpKey"></a>

```typescript
public readonly pgpKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAclTokenSecretIdConfig <a name="DataConsulAclTokenSecretIdConfig" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.Initializer"></a>

```typescript
import { dataConsulAclTokenSecretId } from '@cdktf/provider-consul'

const dataConsulAclTokenSecretIdConfig: dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.accessorId">accessorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#accessor_id DataConsulAclTokenSecretId#accessor_id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#id DataConsulAclTokenSecretId#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#namespace DataConsulAclTokenSecretId#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.partition">partition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#partition DataConsulAclTokenSecretId#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.pgpKey">pgpKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#pgp_key DataConsulAclTokenSecretId#pgp_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessorId`<sup>Required</sup> <a name="accessorId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.accessorId"></a>

```typescript
public readonly accessorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#accessor_id DataConsulAclTokenSecretId#accessor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#id DataConsulAclTokenSecretId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#namespace DataConsulAclTokenSecretId#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#partition DataConsulAclTokenSecretId#partition}.

---

##### `pgpKey`<sup>Optional</sup> <a name="pgpKey" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.pgpKey"></a>

```typescript
public readonly pgpKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_token_secret_id#pgp_key DataConsulAclTokenSecretId#pgp_key}.

---




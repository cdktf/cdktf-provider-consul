# `data_consul_network_area_members`

Refer to the Terraform Registory for docs: [`data_consul_network_area_members`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members).

# `dataConsulNetworkAreaMembers` Submodule <a name="`dataConsulNetworkAreaMembers` Submodule" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulNetworkAreaMembers <a name="DataConsulNetworkAreaMembers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members consul_network_area_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

new dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers(scope: Construct, id: string, config: DataConsulNetworkAreaMembersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig">DataConsulNetworkAreaMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig">DataConsulNetworkAreaMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulNetworkAreaMembers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isConstruct"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformElement"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformDataSource"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.generateConfigForImport"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataConsulNetworkAreaMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulNetworkAreaMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulNetworkAreaMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulNetworkAreaMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.members">members</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList">DataConsulNetworkAreaMembersMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.members"></a>

```typescript
public readonly members: DataConsulNetworkAreaMembersMembersList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList">DataConsulNetworkAreaMembersMembersList</a>

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulNetworkAreaMembersConfig <a name="DataConsulNetworkAreaMembersConfig" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.Initializer"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

const dataConsulNetworkAreaMembersConfig: dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.uuid">uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#uuid DataConsulNetworkAreaMembers#uuid}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.datacenter">datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#datacenter DataConsulNetworkAreaMembers#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#id DataConsulNetworkAreaMembers#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#token DataConsulNetworkAreaMembers#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#uuid DataConsulNetworkAreaMembers#uuid}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#datacenter DataConsulNetworkAreaMembers#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#id DataConsulNetworkAreaMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_area_members#token DataConsulNetworkAreaMembers#token}.

---

### DataConsulNetworkAreaMembersMembers <a name="DataConsulNetworkAreaMembersMembers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers.Initializer"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

const dataConsulNetworkAreaMembersMembers: dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulNetworkAreaMembersMembersList <a name="DataConsulNetworkAreaMembersMembersList" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

new dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.get"></a>

```typescript
public get(index: number): DataConsulNetworkAreaMembersMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataConsulNetworkAreaMembersMembersOutputReference <a name="DataConsulNetworkAreaMembersMembersOutputReference" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer"></a>

```typescript
import { dataConsulNetworkAreaMembers } from '@cdktf/provider-consul'

new dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.rtt">rtt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers">DataConsulNetworkAreaMembersMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `rtt`<sup>Required</sup> <a name="rtt" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.rtt"></a>

```typescript
public readonly rtt: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataConsulNetworkAreaMembersMembers;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers">DataConsulNetworkAreaMembersMembers</a>

---




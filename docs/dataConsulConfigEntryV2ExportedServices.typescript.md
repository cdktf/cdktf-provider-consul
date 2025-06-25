# `dataConsulConfigEntryV2ExportedServices` Submodule <a name="`dataConsulConfigEntryV2ExportedServices` Submodule" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulConfigEntryV2ExportedServices <a name="DataConsulConfigEntryV2ExportedServices" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services consul_config_entry_v2_exported_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer"></a>

```typescript
import { dataConsulConfigEntryV2ExportedServices } from '@cdktf/provider-consul'

new dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices(scope: Construct, id: string, config: DataConsulConfigEntryV2ExportedServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig">DataConsulConfigEntryV2ExportedServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig">DataConsulConfigEntryV2ExportedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartitionConsumers">resetPartitionConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPeerConsumers">resetPeerConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetSamenessGroupConsumers">resetSamenessGroupConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetServices">resetServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPartitionConsumers` <a name="resetPartitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartitionConsumers"></a>

```typescript
public resetPartitionConsumers(): void
```

##### `resetPeerConsumers` <a name="resetPeerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPeerConsumers"></a>

```typescript
public resetPeerConsumers(): void
```

##### `resetSamenessGroupConsumers` <a name="resetSamenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetSamenessGroupConsumers"></a>

```typescript
public resetSamenessGroupConsumers(): void
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetServices"></a>

```typescript
public resetServices(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct"></a>

```typescript
import { dataConsulConfigEntryV2ExportedServices } from '@cdktf/provider-consul'

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement"></a>

```typescript
import { dataConsulConfigEntryV2ExportedServices } from '@cdktf/provider-consul'

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource"></a>

```typescript
import { dataConsulConfigEntryV2ExportedServices } from '@cdktf/provider-consul'

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport"></a>

```typescript
import { dataConsulConfigEntryV2ExportedServices } from '@cdktf/provider-consul'

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataConsulConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulConfigEntryV2ExportedServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulConfigEntryV2ExportedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulConfigEntryV2ExportedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumersInput">partitionConsumersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumersInput">peerConsumersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumersInput">samenessGroupConsumersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.servicesInput">servicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumers">partitionConsumers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumers">peerConsumers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumers">samenessGroupConsumers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.services">services</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionConsumersInput`<sup>Optional</sup> <a name="partitionConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumersInput"></a>

```typescript
public readonly partitionConsumersInput: string[];
```

- *Type:* string[]

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `peerConsumersInput`<sup>Optional</sup> <a name="peerConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumersInput"></a>

```typescript
public readonly peerConsumersInput: string[];
```

- *Type:* string[]

---

##### `samenessGroupConsumersInput`<sup>Optional</sup> <a name="samenessGroupConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumersInput"></a>

```typescript
public readonly samenessGroupConsumersInput: string[];
```

- *Type:* string[]

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.servicesInput"></a>

```typescript
public readonly servicesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `partitionConsumers`<sup>Required</sup> <a name="partitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumers"></a>

```typescript
public readonly partitionConsumers: string[];
```

- *Type:* string[]

---

##### `peerConsumers`<sup>Required</sup> <a name="peerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumers"></a>

```typescript
public readonly peerConsumers: string[];
```

- *Type:* string[]

---

##### `samenessGroupConsumers`<sup>Required</sup> <a name="samenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumers"></a>

```typescript
public readonly samenessGroupConsumers: string[];
```

- *Type:* string[]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulConfigEntryV2ExportedServicesConfig <a name="DataConsulConfigEntryV2ExportedServicesConfig" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.Initializer"></a>

```typescript
import { dataConsulConfigEntryV2ExportedServices } from '@cdktf/provider-consul'

const dataConsulConfigEntryV2ExportedServicesConfig: dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.kind">kind</a></code> | <code>string</code> | The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices). |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.name">name</a></code> | <code>string</code> | The name of the config entry to read. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partition">partition</a></code> | <code>string</code> | The partition the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partitionConsumers">partitionConsumers</a></code> | <code>string[]</code> | The exported service partition consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.peerConsumers">peerConsumers</a></code> | <code>string[]</code> | The exported service peer consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers">samenessGroupConsumers</a></code> | <code>string[]</code> | The exported service sameness group consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.services">services</a></code> | <code>string[]</code> | The exported services. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#kind DataConsulConfigEntryV2ExportedServices#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the config entry to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#name DataConsulConfigEntryV2ExportedServices#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#namespace DataConsulConfigEntryV2ExportedServices#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#partition DataConsulConfigEntryV2ExportedServices#partition}

---

##### `partitionConsumers`<sup>Optional</sup> <a name="partitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partitionConsumers"></a>

```typescript
public readonly partitionConsumers: string[];
```

- *Type:* string[]

The exported service partition consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#partition_consumers DataConsulConfigEntryV2ExportedServices#partition_consumers}

---

##### `peerConsumers`<sup>Optional</sup> <a name="peerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.peerConsumers"></a>

```typescript
public readonly peerConsumers: string[];
```

- *Type:* string[]

The exported service peer consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#peer_consumers DataConsulConfigEntryV2ExportedServices#peer_consumers}

---

##### `samenessGroupConsumers`<sup>Optional</sup> <a name="samenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers"></a>

```typescript
public readonly samenessGroupConsumers: string[];
```

- *Type:* string[]

The exported service sameness group consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#sameness_group_consumers DataConsulConfigEntryV2ExportedServices#sameness_group_consumers}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

The exported services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#services DataConsulConfigEntryV2ExportedServices#services}

---




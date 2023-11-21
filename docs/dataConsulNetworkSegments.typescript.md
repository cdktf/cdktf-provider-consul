# `data_consul_network_segments`

Refer to the Terraform Registory for docs: [`data_consul_network_segments`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments).

# `dataConsulNetworkSegments` Submodule <a name="`dataConsulNetworkSegments` Submodule" id="@cdktf/provider-consul.dataConsulNetworkSegments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulNetworkSegments <a name="DataConsulNetworkSegments" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments consul_network_segments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer"></a>

```typescript
import { dataConsulNetworkSegments } from '@cdktf/provider-consul'

new dataConsulNetworkSegments.DataConsulNetworkSegments(scope: Construct, id: string, config?: DataConsulNetworkSegmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig">DataConsulNetworkSegmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig">DataConsulNetworkSegmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulNetworkSegments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isConstruct"></a>

```typescript
import { dataConsulNetworkSegments } from '@cdktf/provider-consul'

dataConsulNetworkSegments.DataConsulNetworkSegments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformElement"></a>

```typescript
import { dataConsulNetworkSegments } from '@cdktf/provider-consul'

dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformDataSource"></a>

```typescript
import { dataConsulNetworkSegments } from '@cdktf/provider-consul'

dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport"></a>

```typescript
import { dataConsulNetworkSegments } from '@cdktf/provider-consul'

dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataConsulNetworkSegments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulNetworkSegments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulNetworkSegments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulNetworkSegments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.segments">segments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.segments"></a>

```typescript
public readonly segments: string[];
```

- *Type:* string[]

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulNetworkSegmentsConfig <a name="DataConsulNetworkSegmentsConfig" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.Initializer"></a>

```typescript
import { dataConsulNetworkSegments } from '@cdktf/provider-consul'

const dataConsulNetworkSegmentsConfig: dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.datacenter">datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#datacenter DataConsulNetworkSegments#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#id DataConsulNetworkSegments#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#token DataConsulNetworkSegments#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#datacenter DataConsulNetworkSegments#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#id DataConsulNetworkSegments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#token DataConsulNetworkSegments#token}.

---




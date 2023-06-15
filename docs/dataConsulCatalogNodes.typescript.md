# `data_consul_catalog_nodes`

Refer to the Terraform Registory for docs: [`data_consul_catalog_nodes`](https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes).

# `dataConsulCatalogNodes` Submodule <a name="`dataConsulCatalogNodes` Submodule" id="@cdktf/provider-consul.dataConsulCatalogNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulCatalogNodes <a name="DataConsulCatalogNodes" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes consul_catalog_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

new dataConsulCatalogNodes.DataConsulCatalogNodes(scope: Construct, id: string, config?: DataConsulCatalogNodesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig">DataConsulCatalogNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig">DataConsulCatalogNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.putQueryOptions">putQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetQueryOptions">resetQueryOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putQueryOptions` <a name="putQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.putQueryOptions"></a>

```typescript
public putQueryOptions(value: IResolvable | DataConsulCatalogNodesQueryOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.putQueryOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQueryOptions` <a name="resetQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetQueryOptions"></a>

```typescript
public resetQueryOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isConstruct"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

dataConsulCatalogNodes.DataConsulCatalogNodes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformElement"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformDataSource"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodeIds">nodeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodeNames">nodeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList">DataConsulCatalogNodesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.queryOptions">queryOptions</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList">DataConsulCatalogNodesQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.queryOptionsInput">queryOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `nodeIds`<sup>Required</sup> <a name="nodeIds" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodeIds"></a>

```typescript
public readonly nodeIds: string[];
```

- *Type:* string[]

---

##### `nodeNames`<sup>Required</sup> <a name="nodeNames" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodeNames"></a>

```typescript
public readonly nodeNames: string[];
```

- *Type:* string[]

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodes"></a>

```typescript
public readonly nodes: DataConsulCatalogNodesNodesList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList">DataConsulCatalogNodesNodesList</a>

---

##### `queryOptions`<sup>Required</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.queryOptions"></a>

```typescript
public readonly queryOptions: DataConsulCatalogNodesQueryOptionsList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList">DataConsulCatalogNodesQueryOptionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queryOptionsInput`<sup>Optional</sup> <a name="queryOptionsInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.queryOptionsInput"></a>

```typescript
public readonly queryOptionsInput: IResolvable | DataConsulCatalogNodesQueryOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulCatalogNodesConfig <a name="DataConsulCatalogNodesConfig" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.Initializer"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

const dataConsulCatalogNodesConfig: dataConsulCatalogNodes.DataConsulCatalogNodesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#id DataConsulCatalogNodes#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.queryOptions">queryOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>[]</code> | query_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#id DataConsulCatalogNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.queryOptions"></a>

```typescript
public readonly queryOptions: IResolvable | DataConsulCatalogNodesQueryOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>[]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#query_options DataConsulCatalogNodes#query_options}

---

### DataConsulCatalogNodesNodes <a name="DataConsulCatalogNodesNodes" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodes.Initializer"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

const dataConsulCatalogNodesNodes: dataConsulCatalogNodes.DataConsulCatalogNodesNodes = { ... }
```


### DataConsulCatalogNodesQueryOptions <a name="DataConsulCatalogNodesQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.Initializer"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

const dataConsulCatalogNodesQueryOptions: dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.allowStale">allowStale</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#allow_stale DataConsulCatalogNodes#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.datacenter">datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#datacenter DataConsulCatalogNodes#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.near">near</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#near DataConsulCatalogNodes#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.nodeMeta">nodeMeta</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#node_meta DataConsulCatalogNodes#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.partition">partition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#partition DataConsulCatalogNodes#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.requireConsistent">requireConsistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#require_consistent DataConsulCatalogNodes#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#token DataConsulCatalogNodes#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.waitIndex">waitIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#wait_index DataConsulCatalogNodes#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.waitTime">waitTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#wait_time DataConsulCatalogNodes#wait_time}. |

---

##### `allowStale`<sup>Optional</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.allowStale"></a>

```typescript
public readonly allowStale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#allow_stale DataConsulCatalogNodes#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#datacenter DataConsulCatalogNodes#datacenter}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.near"></a>

```typescript
public readonly near: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#near DataConsulCatalogNodes#near}.

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.nodeMeta"></a>

```typescript
public readonly nodeMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#node_meta DataConsulCatalogNodes#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#partition DataConsulCatalogNodes#partition}.

---

##### `requireConsistent`<sup>Optional</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.requireConsistent"></a>

```typescript
public readonly requireConsistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#require_consistent DataConsulCatalogNodes#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#token DataConsulCatalogNodes#token}.

---

##### `waitIndex`<sup>Optional</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.waitIndex"></a>

```typescript
public readonly waitIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#wait_index DataConsulCatalogNodes#wait_index}.

---

##### `waitTime`<sup>Optional</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.waitTime"></a>

```typescript
public readonly waitTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_nodes#wait_time DataConsulCatalogNodes#wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulCatalogNodesNodesList <a name="DataConsulCatalogNodesNodesList" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

new dataConsulCatalogNodes.DataConsulCatalogNodesNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.get"></a>

```typescript
public get(index: number): DataConsulCatalogNodesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataConsulCatalogNodesNodesOutputReference <a name="DataConsulCatalogNodesNodesOutputReference" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

new dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.taggedAddresses">taggedAddresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodes">DataConsulCatalogNodesNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.meta"></a>

```typescript
public readonly meta: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `taggedAddresses`<sup>Required</sup> <a name="taggedAddresses" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.taggedAddresses"></a>

```typescript
public readonly taggedAddresses: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataConsulCatalogNodesNodes;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodes">DataConsulCatalogNodesNodes</a>

---


### DataConsulCatalogNodesQueryOptionsList <a name="DataConsulCatalogNodesQueryOptionsList" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

new dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.get"></a>

```typescript
public get(index: number): DataConsulCatalogNodesQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataConsulCatalogNodesQueryOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>[]

---


### DataConsulCatalogNodesQueryOptionsOutputReference <a name="DataConsulCatalogNodesQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer"></a>

```typescript
import { dataConsulCatalogNodes } from '@cdktf/provider-consul'

new dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetAllowStale">resetAllowStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetNear">resetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetNodeMeta">resetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetRequireConsistent">resetRequireConsistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetWaitIndex">resetWaitIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetWaitTime">resetWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowStale` <a name="resetAllowStale" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetAllowStale"></a>

```typescript
public resetAllowStale(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetNear` <a name="resetNear" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetNear"></a>

```typescript
public resetNear(): void
```

##### `resetNodeMeta` <a name="resetNodeMeta" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetNodeMeta"></a>

```typescript
public resetNodeMeta(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetRequireConsistent` <a name="resetRequireConsistent" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetRequireConsistent"></a>

```typescript
public resetRequireConsistent(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetWaitIndex` <a name="resetWaitIndex" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetWaitIndex"></a>

```typescript
public resetWaitIndex(): void
```

##### `resetWaitTime` <a name="resetWaitTime" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetWaitTime"></a>

```typescript
public resetWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.allowStaleInput">allowStaleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nearInput">nearInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nodeMetaInput">nodeMetaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.requireConsistentInput">requireConsistentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitIndexInput">waitIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitTimeInput">waitTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.allowStale">allowStale</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.near">near</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nodeMeta">nodeMeta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.requireConsistent">requireConsistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitIndex">waitIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitTime">waitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowStaleInput`<sup>Optional</sup> <a name="allowStaleInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.allowStaleInput"></a>

```typescript
public readonly allowStaleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `nearInput`<sup>Optional</sup> <a name="nearInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nearInput"></a>

```typescript
public readonly nearInput: string;
```

- *Type:* string

---

##### `nodeMetaInput`<sup>Optional</sup> <a name="nodeMetaInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nodeMetaInput"></a>

```typescript
public readonly nodeMetaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `requireConsistentInput`<sup>Optional</sup> <a name="requireConsistentInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.requireConsistentInput"></a>

```typescript
public readonly requireConsistentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `waitIndexInput`<sup>Optional</sup> <a name="waitIndexInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitIndexInput"></a>

```typescript
public readonly waitIndexInput: number;
```

- *Type:* number

---

##### `waitTimeInput`<sup>Optional</sup> <a name="waitTimeInput" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitTimeInput"></a>

```typescript
public readonly waitTimeInput: string;
```

- *Type:* string

---

##### `allowStale`<sup>Required</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.allowStale"></a>

```typescript
public readonly allowStale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.near"></a>

```typescript
public readonly near: string;
```

- *Type:* string

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nodeMeta"></a>

```typescript
public readonly nodeMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `requireConsistent`<sup>Required</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.requireConsistent"></a>

```typescript
public readonly requireConsistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `waitIndex`<sup>Required</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitIndex"></a>

```typescript
public readonly waitIndex: number;
```

- *Type:* number

---

##### `waitTime`<sup>Required</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitTime"></a>

```typescript
public readonly waitTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataConsulCatalogNodesQueryOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>

---



